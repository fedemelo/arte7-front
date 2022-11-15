/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeliculaListarComponent } from './pelicula-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { Pelicula } from '../pelicula';
import { faker } from '@faker-js/faker';

describe('PeliculaListarComponent', () => {
  let component: PeliculaListarComponent;
  let fixture: ComponentFixture<PeliculaListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PeliculaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaListarComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
      const pelicula = new Pelicula(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number()
      );

      component.peliculas.push(pelicula);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });





});
