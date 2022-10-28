/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const execShPromise = require("exec-sh").promise;

let fs = require("fs");

const projects = [
  //{ name: "ISIS2603_202220_S1_E3_CreaTuCompu_Front" },
  //{ name: "ISIS2603_202220_S1_E5_AutosDeportivos_Front" },
  //{ name: "ISIS2603_202220_S3_E6_GruposMusicales_Front" },
  //{ name: "ISIS2603_202220_S3_E5_VecindarioAmigo_Front" },
  { name: "ISIS2603_202220_S3_E4_Gym4Fit_Front" },
  /*{ name: "ISIS2603_202220_S3_E3_DogSpa_Front"},
  { name: "ISIS2603_202220_S1_E4_Series_Front"},
  { name: "ISIS2603_202220_S1_E1_ESports_Front"},
  { name: "ISIS2603_202220_S1_E2_CocinasDelMundo_Front"},
  { name: "ISIS2603_202220_S2_E4_CarMotor_Front"},
  { name: "ISIS2603_202220_S2_E2_LigaAjedrez_Front"},
  { name: "ISIS2603_202220_S4_E5_OrganizacionEventos_Front"},
  { name: "ISIS2603_202220_S3_E1_Arte7_Front"},
  { name: "ISIS2603_202220_S4_E4_ViviendaUniversitaria_Front"},
  { name: "ISIS2603_202220_S1_E6_Streaming_Front"},
  { name: "ISIS2603_202220_S4_E2_AdopcionMascotas_Front"},
  { name: "ISIS2603_202220_S2_E1_MundialesFutbol_Front"},
  { name: "ISIS2603_202220_S2_E3_FindMyCourse_Front"},
  { name: "ISIS2603_202220_S4_E1_LabXR_Front"},
  { name: "ISIS2603_202220_S3_E2_CaminatasEcologicas_Front"},
  { name: "ISIS2603_202220_S4_E3_Outfits_Front"},*/
];

const config = {
  organization: "Uniandes-isis2603",
  gitKey: "de5cd571-10da-4034-8ba8-af99beef4b14",
  sonarServer: "sonar-isis2603",
  jenkinsServer: "jenkins-isis2603",
};

const createRepos = async () => {
  let out;
  try {
    for (const project of projects) {
      const jenkinsFile = getJenkinsFile(project.name);
      const sonarFile = getSonarFile(project.name);
      const readmeFile = getReadmeFile(project.name);

      fs.writeFileSync("Jenkinsfile", jenkinsFile);
      fs.writeFileSync("sonar-project.properties", sonarFile);
      fs.writeFileSync("README.md", readmeFile);

      let command1 = `git remote rm origin`;
      let command2 = `hub create ${config.organization}/${project.name}`;
      let command3 = `git commit -a -m "Update Jenkinsfile"`;
      let command4 = `git push origin master`;

      console.log("Removing remote: ", project.name);
      out = await execShPromise(command1, true);

      console.log("Creating repo: ", project.name);
      out = await execShPromise(command2, true);

      console.log("Add files: ", project.name);
      out = await execShPromise(command3, true);

      console.log("Commiting: ", project.name);
      out = await execShPromise(command4, true);
    }
  } catch (e) {
    console.log("Error: ", e);
    console.log("Stderr: ", e.stderr);
    console.log("Stdout: ", e.stdout);
    return e;
  }
  console.log("out: ", out.stdout, out.stderr);
};

createRepos();

function getReadmeFile(repo) {
  const content = `# Enlaces
  - [Jenkins](http://157.253.238.75:8080/${config.jenkinsServer}/)
  - [Sonar](http://157.253.238.75:8080/${config.sonarServer}/)`;

  return content;
}

function getSonarFile(repo) {
  const content = `sonar.host.url=http://157.253.238.75:8080/${config.sonarServer}/
  sonar.projectKey=${repo}:sonar
  sonar.projectName=${repo}
  sonar.projectVersion=1.0
  sonar.sources=src/app
  sonar.test=src/app
  sonar.test.inclusions=**/*.spec.ts
  sonar.exclusions=**/*.module.ts, **/utils/**
  sonar.ts.tslint.configPath=tslint.json
  sonar.javascript.lcov.reportPaths=coverage/front/lcov.info
  sonar.testExecutionReportPaths=reports/ut_report.xml`;

  return content;
}

function getJenkinsFile(repo) {
  const content = `pipeline {
    agent any
    environment {
       GIT_REPO = '${repo}'
       GIT_CREDENTIAL_ID = '${config.gitKey}'
       SONARQUBE_URL = '${config.jenkinsServer}'
    }
    stages {
       stage('Checkout') {
          steps {
             scmSkip(deleteBuild: true, skipPattern:'.*\\\\[ci-skip\\\\].*')

             git branch: 'master',
                credentialsId: env.GIT_CREDENTIAL_ID,
                url: 'https://github.com/${config.organization}/' + env.GIT_REPO
          }
       }
       stage('Git Analysis') {
          // Run git analysis
          steps {
             script {
                docker.image('gitinspector-isis2603').inside('--entrypoint=""') {
                   sh '''
                      mkdir -p ./reports/
                      datetime=$(date +'%Y-%m-%d_%H%M%S')
                      gitinspector --file-types="cs,js,asax,ascx,asmx,aspx,html,fs,ts" --format=html --RxU -w -T -x author:Bocanegra -x author:estudiante > ./reports/index.html
                   '''
                }
             }
             withCredentials([usernamePassword(credentialsId: env.GIT_CREDENTIAL_ID, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                sh('git config --global user.email "ci-isis2603@uniandes.edu.co"')
                sh('git config --global user.name "ci-isis2603"')
                sh('git add ./reports/index.html')
                sh('git commit -m "[ci-skip] GitInspector report added"')
                sh('git pull https://\${GIT_USERNAME}:\${GIT_PASSWORD}@github.com/${config.organization}/\${GIT_REPO} master')
                sh('git push https://\${GIT_USERNAME}:\${GIT_PASSWORD}@github.com/${config.organization}/\${GIT_REPO} master')
             }
          }
       }
       stage('Build') {
          // Build app
          steps {
             script {
                docker.image('citools-isis2603:latest').inside('-u root') {
                   sh '''
                      CYPRESS_INSTALL_BINARY=0 npm install
                      npm i -s
                      npm i typescript@4.6.2
                      ng build
                   '''
                }
             }
          }
       }
      stage('Test') {
          steps {
             script {
                docker.image('citools-isis2603:latest').inside('-u root') {
                   sh '''
                      ng test --watch=false --code-coverage true
                      npm run sonar
                   '''
                }
             }
          }
       }
       stage('Static Analysis') {
          // Run static analysis
          steps {
             sh '''
                docker run --rm -u root -e SONAR_HOST_URL=\${SONARQUBE_URL} -v \${WORKSPACE}:/usr/src sonarsource/sonar-scanner-cli:4.3
             '''
          }
       }
    }
    post {
       always {
          // Clean workspace
          cleanWs deleteDirs: true
       }
    }
  }
  `;
  return content;
}
