import { Component, OnInit } from '@angular/core';

import { ActorService } from '../actor.service';
import { ActorDetail } from '../actor-detail';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css'],
})
export class ActorListComponent implements OnInit {
  actores: Array<ActorDetail> = [];
  selectedActor!: ActorDetail;
  selected: boolean = false;

  constructor(private actorService: ActorService) {}

  getActores(): void {
    this.actorService.getActores().subscribe((actores) => {
      this.actores = actores;
    });
  }

  selectActor(actor: ActorDetail) {
    this.selectedActor = actor;
    this.selected = true;
  }

  ngOnInit() {
    this.getActores();
  }
}
