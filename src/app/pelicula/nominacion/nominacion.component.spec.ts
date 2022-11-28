/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NominacionComponent } from './nominacion.component';

describe('NominacionComponent', () => {
  let component: NominacionComponent;
  let fixture: ComponentFixture<NominacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
