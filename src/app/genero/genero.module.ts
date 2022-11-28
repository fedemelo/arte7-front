import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroListComponent } from './genero-list/genero-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    GeneroListComponent
  ],
  declarations: [
    GeneroListComponent
  ]
})
export class GeneroModule { }
