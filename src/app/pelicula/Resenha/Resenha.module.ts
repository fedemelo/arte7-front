import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResenhaListComponent } from './Resenha-list/Resenha-list.component';


@NgModule({
  imports: [CommonModule],
  exports : [ResenhaListComponent],
  declarations: [ResenhaListComponent]
})
export class ResenhaModule { }
