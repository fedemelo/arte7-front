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
  name: string = "";

  constructor(private peliculaService: PeliculaService) { }

  filter(pelis: PeliculaDetail[]): PeliculaDetail[] {
    let ppelis: PeliculaDetail[] = []
    for (let i: number = 0; i < pelis.length; i++) {
      if (pelis[i].nombre.indexOf(this.name) != -1) {
        ppelis.push(pelis[i])
      }
    }
    return ppelis;
  }

  getPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }

  selectPelicula(peliculaDetail: PeliculaDetail){
    this.selectedPelicula = peliculaDetail;
    this.selected=true;
  }

  setName(name: string) {
    this.name = name;
  }

  ngOnInit() {
    this.getPeliculas();
  }
}
