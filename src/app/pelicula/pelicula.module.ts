import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { MenuFiltrosComponent } from './menu-filtros/menu-filtros.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { PeliculaListarComponent } from './pelicula-listar/pelicula-listar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PeliculaDetailModule } from './pelicula-detail/pelicula-detail.module';
import { ResenhaModule } from './Resenha/Resenha.module';

@NgModule({
  imports: [
    ResenhaModule,
    PeliculaDetailModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    ResenhaModule,
    PeliculaDetailModule,
    VistaPrincipalComponent,
    MenuFiltrosComponent,
    BarraNavegacionComponent,
    PeliculaListarComponent
  ],
  declarations: [
    VistaPrincipalComponent,
    MenuFiltrosComponent,
    BarraNavegacionComponent,
    PeliculaListarComponent
  ]
})
export class PeliculaModule { }
