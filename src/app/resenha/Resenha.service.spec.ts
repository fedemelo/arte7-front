/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { ResenhaService } from './Resenha.service';

import { DebugElement, Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resenha } from './resenha';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResenhaListComponent } from './resenha-list/resenha-list.component';
import { Usuario } from './usuario';
import { faker } from '@faker-js/faker';

describe('Service: Resenha', () => {
  let component: ResenhaListComponent;
  let fixture: ComponentFixture<ResenhaListComponent>;
  let debug: DebugElement;
  let usuario: Usuario;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations : [ResenhaListComponent],
      providers: [ResenhaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenhaListComponent);
    component = fixture.componentInstance;

    usuario = new Usuario(faker.datatype.number(), faker.name.firstName());

    component.resenhas = [
      new Resenha(faker.datatype.number(), faker.datatype.number(), faker.datatype.number(), faker.lorem.sentence(), usuario)
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ...', inject([ResenhaService], (service: ResenhaService) => {
    expect(service).toBeTruthy();
  }));
});
