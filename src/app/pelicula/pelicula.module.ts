import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorModule } from '../actor/actor.module';
import { ResenhaModule } from './Resenha/Resenha.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResenhaModule, ActorModule]
})
export class PeliculaModule { }
