/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { ActorDetailComponent } from './actor-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {ActorDetail} from 'src/app/actor/actor-detail'
import { Pelicula } from 'src/app/pelicula/pelicula';


describe('ActorDetailComponent', () => {
  let component: ActorDetailComponent;
  let fixture: ComponentFixture<ActorDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ ActorDetailComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetailComponent);
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
    component.actorDetail=new ActorDetail(
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
      component.actorDetail.nombre
    );
  });

  it('should have an img element with src = actorDetail.image', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.actorDetail.fotografia
    );
  });

  it('should have a <p> tag with component.actorDetail.name', () => {
    const componentElement: HTMLElement = debug.query(By.css('p.h3.p-2.actor-name')).nativeElement;
    expect(componentElement.textContent).toContain(component.actorDetail.nombre);
  });

  it('should have one dd tag for component.actorDetail.biografia', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'Biografía';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.actorDetail.biografia);
  });

  it('should have one dd tag for component.actorDetail.fechaNacimiento', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'Fecha de Nacimiento';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.actorDetail.fechaNacimiento);
  });

  it('should have a h3 tag with component.actorDetail.name', () => {
    const componentElement: HTMLElement = debug.query(By.css('h3')).nativeElement;
    expect(componentElement.textContent).toContain("Peliculas populares de "+component.actorDetail.nombre);
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
        component.actorDetail.peliculas[i].poster)
    })
  });

  it('should have the corresponding alt to the pelicula nombre', () => {
    debug.queryAll(By.css('card-img-top img_card')).forEach((img, i)=>{
      expect(img.attributes['alt']).toEqual(
        component.actorDetail.peliculas[i].nombre)
    });
  });

  it('should have h4 tag with the book.name', () => {
    debug.queryAll(By.css('h4')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.actorDetail.peliculas[i].nombre)
    });
  });


});
