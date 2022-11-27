import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaDetailComponent } from './pelicula-detail.component';
import { ResenhaModule } from 'src/app/resenha/resenha.module';


@NgModule({
  imports: [
    ResenhaModule,
    CommonModule
  ],
  exports: [
    PeliculaDetailComponent
  ],
  declarations: [
    PeliculaDetailComponent
  ]
})
export class PeliculaDetailModule { }
