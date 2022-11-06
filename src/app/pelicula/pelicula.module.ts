import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { MenuFiltrosComponent } from './menu-filtros/menu-filtros.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    VistaPrincipalComponent,
    MenuFiltrosComponent
  ],
  declarations: [
    VistaPrincipalComponent,
    MenuFiltrosComponent
  ]
})
export class PeliculaModule { }
