/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PeliculaService } from './Pelicula.service';
import { AppComponent } from '../app.component';
import { PeliculaComponent } from './pelicula.component';



describe('Service: Pelicula', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule, HttpClientTestingModule],
      declarations : [AppComponent, PeliculaComponent],
      providers: [PeliculaService]
    });
  });


  it('should ...', inject([PeliculaService], (service: PeliculaService) => {
    expect(service).toBeTruthy();
  }));
});
