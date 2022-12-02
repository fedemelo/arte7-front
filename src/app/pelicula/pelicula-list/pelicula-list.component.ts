import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../Pelicula.service';
import { PeliculaDetail } from '../pelicula-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css'],
})
export class PeliculaListComponent implements OnInit {
  peliculas: Array<PeliculaDetail> = [];
  selectedPelicula!: PeliculaDetail;
  selected: Boolean = false;
  name: string = '';

  constructor(
    private peliculaService: PeliculaService,
    private route: ActivatedRoute
  ) {}

  getPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }

  selectPelicula(peliculaDetail: PeliculaDetail) {
    this.selectedPelicula = peliculaDetail;
    this.selected = true;
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('filtro') as string;
    this.getPeliculas();
  }

  filter(peliculas: PeliculaDetail[]): PeliculaDetail[] {
    let filterName: string = this.name;
    let fun: Function = this.nombreContiene;
    if (this.name == 'netflix') {
      filterName = "Netflix"
      fun = this.estaEnPlataforma;
    } else if (this.name == 'hbo') {
      filterName = "HBO Max"
      fun = this.estaEnPlataforma;
    } else if (this.name == 'prime') {
      filterName = "Prime Video"
      fun = this.estaEnPlataforma;
    } else if (this.name == 'disney') {
      filterName = "Disney+"
      fun = this.estaEnPlataforma;
    } else if (this.name == 'apple') {
      filterName = "Apple TV+"
      fun = this.estaEnPlataforma;
    }
    let peliculasFiltradas: PeliculaDetail[] = peliculas.filter((pelicula) => {
      return fun(pelicula, filterName);
    });
    return peliculasFiltradas;
  }

  nombreContiene(pelicula: PeliculaDetail, busqueda: string): boolean {
    return pelicula.nombre.includes(busqueda)
  }

  estaEnPlataforma(pelicula: PeliculaDetail, plataforma: string): boolean {
    let esta: boolean = false;
    pelicula.plataformas.forEach((plat) => {
      if (plat.nombre == plataforma) {
        esta = true;
      }
    });

    return esta;
  }

}
