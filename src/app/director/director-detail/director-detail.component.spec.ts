/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { DirectorDetailComponent } from './director-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {DirectorDetail} from 'src/app/director/director-detail'


describe('ActorDetailComponent', () => {
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

    component.directorDetail=new DirectorDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
       faker.image.imageUrl(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
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

});
