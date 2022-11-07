import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { MenuFiltrosComponent } from './menu-filtros/menu-filtros.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { PeliculaDetailComponent } from './pelicula-detail/pelicula-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    VistaPrincipalComponent,
    MenuFiltrosComponent,
    BarraNavegacionComponent,
    PeliculaListComponent
  ],
  declarations: [
    VistaPrincipalComponent,
    MenuFiltrosComponent,
    BarraNavegacionComponent,
    PeliculaListComponent,
    PeliculaDetailComponent
  ]
})
export class PeliculaModule { }
