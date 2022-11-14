/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ResenhaListComponent } from './Resenha-list/Resenha-list.component';
import { ResenhaService } from './Resenha.service';
import { Resenha } from './Resenha';
import { Usuario } from './Usuario';

import { HttpClientTestingModule } from '@angular/common/http/testing';
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
