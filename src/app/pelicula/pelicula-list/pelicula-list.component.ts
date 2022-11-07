import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaDetail } from '../pelicula-detail';
import { PeliculaService } from '../Pelicula.service'

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas: Array<Pelicula> = [];
  selectedBook!: PeliculaDetail;
  selected = false;

  constructor(private peliculaService: PeliculaService) { }

  onSelected(pelicula: PeliculaDetail): void {
    this.selected = true;
    this.selectedBook = pelicula;
  }

  getPeliculas(): void{
    this.peliculaService.getPeliculas().subscribe((peliculas)=>{
      this.peliculas = peliculas;
    });
  }

  ngOnInit() {
    this.getPeliculas();
  }

}
