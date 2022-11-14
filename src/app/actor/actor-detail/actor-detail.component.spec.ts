/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { ActorDetailComponent } from './actor-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {ActorDetail} from 'src/app/actor/actor-detail'


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

    component.actorDetail=new ActorDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        faker.date.past(),
        faker.lorem.sentence()
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
      return value.nativeElement.textContent == 'Bio';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.actorDetail.biografia);
  });

  it('should have one dd tag for component.actorDetail.fechaNacimiento', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'BirthDay';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.actorDetail.fechaNacimiento);
  });



});
