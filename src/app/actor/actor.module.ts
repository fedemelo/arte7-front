import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListComponent } from './actor-list/actor-list.component';

import { ActorDetailComponent } from './actor-detail/actor-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ActorDetailComponent,
    ActorListComponent
  ],
  declarations: [
    ActorDetailComponent,
    ActorListComponent
  ]

})
export class ActorModule { }
