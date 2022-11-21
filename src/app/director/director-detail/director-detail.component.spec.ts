/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { DirectorDetailComponent } from './director-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {DirectorDetail} from 'src/app/director/director-detail'
import { Pelicula } from 'src/app/pelicula/pelicula';


describe('directorDetailComponent', () => {
  let component: DirectorDetailComponent;
  let fixture: ComponentFixture<DirectorDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ DirectorDetailComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorDetailComponent);
    component = fixture.componentInstance;

    const peliculas: Pelicula[] = [];
    for (let i = 0; i < 4; i++) {
    const pelicula = new Pelicula (
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
    peliculas.push(pelicula);
  }
    component.directorDetail=new DirectorDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
       faker.image.imageUrl(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       peliculas
    );


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.directorDetail.nombre
    );
  });

  it('should have an img element with src = directorDetail.image', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.directorDetail.fotografia
    );
  });

  it('should have a <p> tag with component.directorDetail.name', () => {
    const componentElement: HTMLElement = debug.query(By.css('p.h3.p-2.director-name')).nativeElement;
    expect(componentElement.textContent).toContain(component.directorDetail.nombre);
  });

  it('should have one dd tag for component.directorDetail.biografia', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'Biografía';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.directorDetail.biografia);
  });

  it('should have one dd tag for component.directorDetail.fechaNacimiento', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'Fecha de Nacimiento';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.directorDetail.fechaNacimiento);
  });

  it('should have a h3 tag with component.directorDetail.name', () => {
    const componentElement: HTMLElement = debug.query(By.css('h3')).nativeElement;
    expect(componentElement.textContent).toContain("Peliculas dirigidas por "+component.directorDetail.nombre);
  });


  it('should have 4 <div.col-3> elements', () => {
    expect(debug.queryAll(By.css('div.col-3')).length == 4).toBeTrue();
  });

  it('should have 4 <div.card> elements', () => {
    expect(debug.queryAll(By.css('div.card')).length == 4).toBeTrue();
  });

  it('should have 4 <img> elements', () => {
    expect(debug.queryAll(By.css('img')).length >= 4).toBeTrue();
  });

  it('should have 4 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body')).length == 4).toBeTrue();
  });

  it('should have the corresponding src to the pelicula poster', () => {
    debug.queryAll(By.css('card-img-top img_card')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.directorDetail.peliculas[i].poster)
    })
  });

  it('should have the corresponding alt to the pelicula nombre', () => {
    debug.queryAll(By.css('card-img-top img_card')).forEach((img, i)=>{
      expect(img.attributes['alt']).toEqual(
        component.directorDetail.peliculas[i].nombre)
    });
  });

  it('should have h4 tag with the book.name', () => {
    debug.queryAll(By.css('h4')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.directorDetail.peliculas[i].nombre)
    });
  });



});
