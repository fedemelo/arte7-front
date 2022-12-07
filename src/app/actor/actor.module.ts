import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListComponent } from './actor-list/actor-list.component';

import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [ActorDetailComponent, ActorListComponent],
  declarations: [ActorDetailComponent, ActorListComponent],
})
export class ActorModule {}
