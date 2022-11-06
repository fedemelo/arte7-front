import { Component, OnInit } from '@angular/core';
import { Director } from '../director';
import { DirectorService } from '../director.service';

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
   });
 }

 ngOnInit() {
   this.getDirectores();
 }

}
