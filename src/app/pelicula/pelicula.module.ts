import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaPrincipalComponent } from './pelicula-principal/pelicula-principal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PeliculaPrincipalComponent],
  declarations: [PeliculaPrincipalComponent]
})
export class PeliculaModule { }
