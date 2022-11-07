import { Component, OnInit } from '@angular/core';

import { Actor } from '../actor';
import { faker } from '@faker-js/faker';
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


     for(let i = 0; i < 10; i++) {
      const actor = new Actor(i,
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
      actores.push(actor);

      console.log(actores)
    }
   });
 }

 ngOnInit() {
   this.getActores();
 }

}

