/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeliculaListComponent } from './pelicula-list.component';

describe('PeliculaListComponent', () => {
  let component: PeliculaListComponent;
  let fixture: ComponentFixture<PeliculaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
