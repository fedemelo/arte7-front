/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PeliculaService } from './Pelicula.service';
import { PeliculaComponent } from './pelicula.component';
import { PeliculaDetailComponent } from './pelicula-detail/pelicula-detail.component';
import { AppComponent } from '../app.component';



describe('Service: Pelicula', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule, HttpClientTestingModule],
      declarations : [AppComponent, PeliculaComponent, PeliculaDetailComponent],
      providers: [PeliculaService]
    });
  });


  it('should ...', inject([PeliculaService], (service: PeliculaService) => {
    expect(service).toBeTruthy();
  }));
});
