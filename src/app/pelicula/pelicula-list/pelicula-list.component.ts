import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../Pelicula.service';
import { PeliculaDetail } from '../pelicula-detail';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {
  peliculas: Array<PeliculaDetail> = [];
  selectedPelicula!: PeliculaDetail;
  selected:Boolean=false;

  constructor(private peliculaService: PeliculaService) { }

  getPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }

  selectPelicula(peliculaDetail: PeliculaDetail){
    this.selectedPelicula = peliculaDetail;
    this.selected=true;
  }

  ngOnInit() {
    this.getPeliculas();
  }
}
