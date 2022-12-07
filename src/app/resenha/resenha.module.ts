import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResenhaListComponent } from './resenha-list/resenha-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ResenhaListComponent],
  exports: [ResenhaListComponent],
})
export class ResenhaModule {}
