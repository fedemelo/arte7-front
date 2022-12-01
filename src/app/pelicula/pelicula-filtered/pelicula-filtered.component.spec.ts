/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeliculaFilteredComponent } from './pelicula-filtered.component';
import { HttpClientModule } from '@angular/common/http';

import { faker } from '@faker-js/faker';
import { PeliculaDetail } from '../pelicula-detail';
import { Actor } from 'src/app/actor/actor';
import { Director } from 'src/app/director/director';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeliculaFilteredComponent', () => {
  let component: PeliculaFilteredComponent;
  let fixture: ComponentFixture<PeliculaFilteredComponent>;
  let debug: DebugElement;
  let debugPeliculaDetail: PeliculaDetail;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PeliculaFilteredComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaFilteredComponent);
    component = fixture.componentInstance;

    let actor = new Actor(
      1,
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    let filtered_a = [actor];

    let director = new Director(
      1,
      faker.name.fullName(),
      faker.image.avatar(),
      faker.datatype.string(),
      faker.datatype.datetime(),
      faker.datatype.string()
    );

    let filtered_d = [director];

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
        filtered_a,
        filtered_d,
        []
      );

      component.peliculas.push(pelicula);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 <div.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-2')).length == 10).toBeTrue();
  });

  it('should have 10 <card.p-2> elements', () => {
    expect(debug.queryAll(By.css('div.card.p-2')).length == 10).toBeTrue();
  });

  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img')).length == 10).toBeTrue();
  });

  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body')).length == 10).toBeTrue();
  });

  it('should have the corresponding src to the pelicula poster', () => {
    debug.queryAll(By.css('card-img-top')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.peliculas[i].poster)
    })
  });

  it('should have the corresponding alt to the pelicula nombre', () => {
    debug.queryAll(By.css('card-img-top')).forEach((img, i)=>{
      expect(img.attributes['alt']).toEqual(
        component.peliculas[i].nombre)
    });
  });

  it('should have h3 tag with the pelicula.nombre', () => {
    debug.queryAll(By.css('h3')).forEach((h3, i)=>{
      expect(h3.nativeElement.textContent).toContain(component.peliculas[i].nombre)
    });
  });

  it('should have p tag with the pelicula.estrellasPromedio', () => {
    debug.queryAll(By.css('p')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.peliculas[i].estrellasPromedio)
    });
  });

  it('should have 9 <div.col.mb-2> elements and the deleted book should not exist', () => {
    debugPeliculaDetail = component.peliculas.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-2')).length == 9).toBeTrue();

    debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(debugPeliculaDetail.nombre);
    });
  });
});
