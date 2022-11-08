/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActorDetailComponent } from './actor-detail.component';
import { HttpClientModule } from '@angular/common/http';

describe('ActorDetailComponent', () => {
  let component: ActorDetailComponent;
  let fixture: ComponentFixture<ActorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ActorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
});
