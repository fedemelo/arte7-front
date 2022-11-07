import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import {PeliculaService } from '../Pelicula.service'

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas: Array<Pelicula> = [];

  constructor(private peliculaService: PeliculaService) { }

  getPeliculas(): void{
    this.peliculaService.getPeliculas().subscribe((peliculas)=>{
      this.peliculas = peliculas;
    });
  }

  ngOnInit() {
    this.getPeliculas();
  }

}
