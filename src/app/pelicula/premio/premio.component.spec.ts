/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PremioComponent } from './premio.component';

describe('PremioComponent', () => {
  let component: PremioComponent;
  let fixture: ComponentFixture<PremioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
