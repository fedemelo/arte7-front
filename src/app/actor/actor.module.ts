import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorDetailComponent } from './actor-detail/actor-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ActorDetailComponent
  ],
  declarations: [
    ActorDetailComponent
  ]
})
export class ActorModule { }
