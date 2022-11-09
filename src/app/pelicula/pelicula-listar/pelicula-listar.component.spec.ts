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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 <div.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
  });

  it('should have 10 <card.p-2> elements', () => {
    expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
  });

  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(10)
  });

  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });

  it('should have the corresponding src to the pelicula poster and alt to the pelicula nombre', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.peliculas[i].poster)

      expect(img.attributes['alt']).toEqual(
        component.peliculas[i].nombre)
    })
  });

  it('should have h3 tag with the pelicula.nombre', () => {
    debug.queryAll(By.css('h3.card-title')).forEach((h3, i)=>{
      expect(h3.nativeElement.textContent).toContain(component.peliculas[i].nombre)
    });
  });

  it('should have p tag with the pelicula.estrellasPromedio', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.peliculas[i].estrellasPromedio)
    });
  });

  it('should have 9 <div.col.mb-2> elements and the deleted book should not exist', () => {
    const pelicula = component.peliculas.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)

    debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(pelicula.nombre);
    });
  });

});
