import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './pelicula.component';
import { ActorModule } from '../actor/actor.module';
import { ResenhaModule } from './Resenha/Resenha.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PeliculaComponent]
})
export class PeliculaModule { }
