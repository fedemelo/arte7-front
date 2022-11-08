import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorListComponent } from './director-list/director-list.component';

import { DirectorDetailComponent } from './director-detail/director-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DirectorDetailComponent,
    DirectorListComponent
  ],
  declarations: [
    DirectorDetailComponent,
    DirectorListComponent
  ]

})
export class DirectorModule { }
