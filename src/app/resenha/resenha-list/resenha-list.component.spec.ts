/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResenhaListComponent } from './resenha-list.component';

describe('ResenhaListComponent', () => {
  let component: ResenhaListComponent;
  let fixture: ComponentFixture<ResenhaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResenhaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenhaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
