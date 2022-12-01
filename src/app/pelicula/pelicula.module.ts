import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { MenuFiltrosComponent } from './menu-filtros/menu-filtros.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { PeliculaFilteredComponent } from './pelicula-filtered/pelicula-filtered.component';

import { NominacionComponent } from './nominacion/nominacion.component';
import { PremioComponent } from './premio/premio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PeliculaDetailComponent } from './pelicula-detail/pelicula-detail.component';
import { ResenhaModule } from '../resenha/resenha.module';
import { GeneroModule } from '../genero/genero.module';
import { PlataformaModule } from '../plataforma/plataforma.module';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    PlataformaModule,
    GeneroModule,
    ResenhaModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    YouTubePlayerModule,
  ],
  exports: [
    NominacionComponent,
    PremioComponent,
    PeliculaDetailComponent,
    VistaPrincipalComponent,
    MenuFiltrosComponent,
    BarraNavegacionComponent,
    PeliculaListComponent,
    PeliculaFilteredComponent,
  ],
  declarations: [
    NominacionComponent,
    PremioComponent,
    PeliculaDetailComponent,
    VistaPrincipalComponent,
    PeliculaDetailComponent,
    MenuFiltrosComponent,
    BarraNavegacionComponent,
    PeliculaListComponent,
    PeliculaFilteredComponent,
  ],
})
export class PeliculaModule {}
