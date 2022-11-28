import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlataformaListComponent } from './plataforma-list/plataforma-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlataformaListComponent
  ],
  exports: [
    PlataformaListComponent
  ]
})
export class PlataformaModule { }
