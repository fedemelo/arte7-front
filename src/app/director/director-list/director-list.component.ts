import { Component, OnInit } from '@angular/core';
import { Director } from '../director';
import { DirectorService } from '../director.service';
import { faker } from '@faker-js/faker';

@Component({
 selector: 'app-director-list',
 templateUrl: './director-list.component.html',
 styleUrls: ['./director-list.component.css']
})
export class DirectorListComponent implements OnInit {

 directores: Array<Director> = [];

 constructor(private directorService: DirectorService) { }

 getDirectores(): void {
   this.directorService.getDirectores().subscribe((directores) => {
     this.directores = directores;

     for(let i = 0; i < 1; i++) {
      const director = new Director(i,
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
          /*
Este uso de faker es para probar como se veria con mas carticas sin tener
que hacer todo lo de postman y blablablabalblablalblabl
*/
      );
      directores.push(director);

    }
   });
 }

 ngOnInit() {
   this.getDirectores();
 }

}
