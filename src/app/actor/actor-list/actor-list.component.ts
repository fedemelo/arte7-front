import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';

@Component({
 selector: 'app-actor-list',
 templateUrl: './actor-list.component.html',
 styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

 actores: Array<Actor> = [];

 constructor(private actorService: ActorService) { }

 getActores(): void {
   this.actorService.getActores().subscribe((actores) => {
     this.actores = actores;
   });
 }

 ngOnInit() {
   this.getActores();
 }

}
