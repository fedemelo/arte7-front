import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorDetailComponent } from './director-detail/director-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DirectorDetailComponent
  ],
  declarations: [
    DirectorDetailComponent
  ]
})
export class DirectorModule { }
