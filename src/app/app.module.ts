import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaModule } from './pelicula/pelicula.module';
import { ResenhaModule } from './pelicula/Resenha/Resenha.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PeliculaModule,
    ResenhaModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
