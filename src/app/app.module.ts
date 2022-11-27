
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ResenhaModule } from './resenha/resenha.module';
import { PeliculaModule } from './pelicula/pelicula.module';
import { ActorModule } from './actor/actor.module';
import { DirectorModule } from './director/director.module';
import { PeliculaRoutingModule } from './pelicula/pelicula-routing.module';
import { ActorRoutingModule } from './actor/actor-routing.module';
import { DirectorRoutingModule } from './director/director-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatSidenavModule,
    ResenhaModule,
    BrowserModule,
    PeliculaRoutingModule,
    ActorRoutingModule,
    DirectorRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    PeliculaModule,
    ActorModule,
    DirectorModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
