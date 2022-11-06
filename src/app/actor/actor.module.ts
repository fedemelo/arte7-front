import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorComponent } from './actor.component';
import { ActorListComponent } from './actor-list/actor-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ActorListComponent],
 declarations: [ActorListComponent]
})
export class ActorModule { }
