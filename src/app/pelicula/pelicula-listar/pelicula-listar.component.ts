import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../Pelicula.service';

@Component({
  selector: 'app-pelicula-listar',
  templateUrl: './pelicula-listar.component.html',
  styleUrls: ['./pelicula-listar.component.css']
})
export class PeliculaListarComponent implements OnInit {
  peliculas: Array<Pelicula> = [];

  constructor(private peliculaService: PeliculaService) { }

  getPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }

  ngOnInit() {
    this.getPeliculas();
  }
}
