import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorListComponent } from './director-list/director-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DirectorListComponent],
 declarations: [DirectorListComponent]
})
export class DirectorModule { }
