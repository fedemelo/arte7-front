/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeliculaListComponent } from './pelicula-list.component';
import { HttpClientModule } from '@angular/common/http';

import { faker } from '@faker-js/faker';
import { PeliculaDetail } from '../pelicula-detail';
import { Actor } from 'src/app/actor/actor';
import { Director } from 'src/app/director/director';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeliculaListComponent', () => {
  let component: PeliculaListComponent;
  let fixture: ComponentFixture<PeliculaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PeliculaListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaListComponent);
    component = fixture.componentInstance;

    let actor = new Actor(
      1,
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    let list_a = [actor];

    let director = new Director(
      1,
      faker.name.fullName(),
      faker.image.avatar(),
      faker.datatype.string(),
      faker.datatype.datetime(),
      faker.datatype.string()
    );

    let list_d = [director];

    for (let i = 0; i < 10; i++) {
      const pelicula = new PeliculaDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        list_a,
        list_d,
        []
      );

      component.peliculas.push(pelicula);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });
});
