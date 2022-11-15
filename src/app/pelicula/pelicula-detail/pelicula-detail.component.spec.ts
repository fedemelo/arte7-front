/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { faker } from '@faker-js/faker';

import { Actor } from 'src/app/actor/actor';
import { PeliculaDetailComponent } from './pelicula-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { Director } from 'src/app/director/director';
import { Pelicula } from '../pelicula';
import { PeliculaDetail } from '../pelicula-detail';


describe('PeliculaListarComponent', () => {
  let component: PeliculaDetailComponent;
  let fixture: ComponentFixture<PeliculaDetailComponent>;
  let debug : DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PeliculaDetailComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaDetailComponent);
    component = fixture.componentInstance;

    let actor = new Actor(1,
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
    );

    let list_a=[actor];

    let director = new Director(1,
        faker.name.fullName(),
        faker.image.avatar(),
        faker.datatype.string(),
        faker.datatype.datetime(),
        faker.datatype.string()
      );

    let list_d=[director];

    component.peliculaDetail = new PeliculaDetail (1,
        faker.name.fullName(),
        faker.image.imageUrl(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.datetime(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.number(),
        list_a,
        list_d,
        []
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 <dt.class.bold> elements', () => {
    expect(debug.queryAll(By.css('dt.class.bold'))).toHaveSize(7)
  });

  it('should have img',() =>{
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']=component.peliculaDetail._poster)
    })
  })

});
