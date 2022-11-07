/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ActorListComponent } from './actor-list.component';
import { HttpClientModule } from '@angular/common/http';

import { Actor } from '../actor';
import { ActorService } from '../actor.service';

describe('ActorListComponent', () => {
 let component: ActorListComponent;
 let fixture: ComponentFixture<ActorListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ ActorListComponent ],
     providers: [ ActorService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ActorListComponent);
   component = fixture.componentInstance;



   for(let i = 0; i < 10; i++) {
     const actor = new Actor(i,
       faker.lorem.sentence(),
       faker.image.imageUrl(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),


     );
     component.actores.push(actor);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have 10 <div.col.mb-2> elements', () => {
   expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
 });

 it('should have 10 <card.p-2> elements', () => {
   expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
 });

 it('should have 10 <img> elements', () => {
   expect(debug.queryAll(By.css('img'))).toHaveSize(10)
 });

 it('should have 10 <div.card-body> elements', () => {
   expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
 });

 it('should have the corresponding src to the actor image and alt to the actor nombre', () => {
   debug.queryAll(By.css('img')).forEach((img, i)=>{
     expect(img.attributes['src']).toEqual(
       component.actores[i].fotografia)

     expect(img.attributes['alt']).toEqual(
       component.actores[i].nombre)
   })
 });

 it('should have h5 tag with the actor.nombre', () => {
   debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
     expect(h5.nativeElement.textContent).toContain(component.actores[i].nombre)
   });
 });


 it('should have 9 <div.col.mb-2> elements and the deleted actor should not exist', () => {
   const actor = component.actores.pop()!;
   fixture.detectChanges();
   expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)

   debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
     expect(selector.nativeElement.textContent).not.toContain(actor.nombre);
   });
 });

});
