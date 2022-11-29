import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { MenuFiltrosComponent } from './menu-filtros/menu-filtros.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ResenhaModule } from './Resenha/Resenha.module';
import { PeliculaDetailComponent } from './pelicula-detail/pelicula-detail.component';
import { YouTubePlayerModule } from "@angular/youtube-player";


@NgModule({
  imports: [
    ResenhaModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    YouTubePlayerModule
  ],
  exports: [
    ResenhaModule,
    PeliculaDetailComponent,
    VistaPrincipalComponent,
    MenuFiltrosComponent,
    BarraNavegacionComponent,
    PeliculaListComponent
  ],
  declarations: [
    VistaPrincipalComponent,
    PeliculaDetailComponent,
    MenuFiltrosComponent,
    BarraNavegacionComponent,
    PeliculaListComponent
  ]
})
export class PeliculaModule { }
