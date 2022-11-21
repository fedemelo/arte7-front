import { Component, OnInit } from '@angular/core';
import { Director } from '../director';
import { DirectorService } from '../director.service';
import { DirectorDetail } from '../director-detail';
import { faker } from '@faker-js/faker';

@Component({
 selector: 'app-director-list',
 templateUrl: './director-list.component.html',
 styleUrls: ['./director-list.component.css']
})
export class DirectorListComponent implements OnInit {

 directores: Array<Director> = [];
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
