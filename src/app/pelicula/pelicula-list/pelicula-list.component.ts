import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaDetail } from '../pelicula-detail';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas: Array<PeliculaDetail> = [];
  selected: Boolean = false;
  selectedPelicula!: PeliculaDetail;

  constructor(private peliculaService: PeliculaService) { }

  getPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }

  onSelected(book: PeliculaDetail): void {
    this.selected = true;
    this.selectedPelicula = pelicula;
  }


  ngOnInit() {
    this.getPeliculas();
  }

}
