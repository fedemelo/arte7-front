import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';
import { DirectorDetail } from '../director-detail';


@Component({
 selector: 'app-director-list',
 templateUrl: './director-list.component.html',
 styleUrls: ['./director-list.component.css']
})
export class DirectorListComponent implements OnInit {

 directores: Array<DirectorDetail> = [];
selectedDirector!:DirectorDetail;
selected:boolean=false;

 constructor(private directorService: DirectorService) { }

 getDirectores(): void {
   this.directorService.getDirectores().subscribe((directores) => {
     this.directores = directores;
   });
 }

selectDirector(director: DirectorDetail){
  this.selectedDirector=director;
  this.selected=true;
}

 ngOnInit() {
   this.getDirectores();
 }

}
