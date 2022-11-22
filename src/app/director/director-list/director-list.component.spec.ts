/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DirectorListComponent } from './director-list.component';
import { HttpClientModule } from '@angular/common/http';

import { Director } from '../director';
import { DirectorService } from '../director.service';
import { Pelicula } from 'src/app/pelicula/pelicula';
import { DirectorDetail } from '../director-detail';

describe('DirectorListComponent', () => {
 let component: DirectorListComponent;
 let fixture: ComponentFixture<DirectorListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ DirectorListComponent ],
     providers: [ DirectorService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(DirectorListComponent);
   component = fixture.componentInstance;



   const peliculas: Pelicula[] = [];
   for (let i = 0; i < 3; i++) {
     const pelicula = new Pelicula (
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.image.imageUrl(),
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.date.past(),
       faker.lorem.sentence(),
       faker.datatype.number(),
       faker.datatype.number()
      );
     peliculas.push(pelicula);
   }

 for(let i = 0; i < 10; i++){
   const director = new DirectorDetail(
     faker.datatype.number(),
     faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      peliculas
   );
   component.directores.push(director);

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

 it('should have the corresponding src to the director image and alt to the director nombre', () => {
   debug.queryAll(By.css('img')).forEach((img, i)=>{
     expect(img.attributes['src']).toEqual(
       component.directores[i].fotografia)

     expect(img.attributes['alt']).toEqual(
       component.directores[i].nombre)
   })
 });

 it('should have h5 tag with the director.nombre', () => {
   debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
     expect(h5.nativeElement.textContent).toContain(component.directores[i].nombre)
   });
 });


 it('should have 9 <div.col.mb-2> elements and the deleted director should not exist', () => {
   const director = component.directores.pop()!;
   fixture.detectChanges();
   expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)

   debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
     expect(selector.nativeElement.textContent).not.toContain(director.nombre);
   });
 });

});
