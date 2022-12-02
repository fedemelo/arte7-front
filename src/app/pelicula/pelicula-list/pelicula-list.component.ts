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
      filterName = 'Netflix';
      fun = this.estaEnPlataforma;
    } else if (this.name == 'hbo') {
      filterName = 'HBO Max';
      fun = this.estaEnPlataforma;
    } else if (this.name == 'prime') {
      filterName = 'Prime Video';
      fun = this.estaEnPlataforma;
    } else if (this.name == 'disney') {
      filterName = 'Disney+';
      fun = this.estaEnPlataforma;
    } else if (this.name == 'apple') {
      filterName = 'Apple TV+';
      fun = this.estaEnPlataforma;

    } else if (Date.parse(this.name)) {
      fun = this.desdeFecha;
    }

    else if (this.name == 'accion') {
      filterName = 'Acción';
      fun = this.tieneGenero;
    } else if (this.name == 'aventuras') {
      filterName = 'Aventuras';
      fun = this.tieneGenero;
    } else if (this.name == 'suspenso') {
      filterName = 'Suspenso';
      fun = this.tieneGenero;
    } else if (this.name == 'comedia') {
      filterName = 'Comedia';
      fun = this.tieneGenero;
    } else if (this.name == 'drama') {
      filterName = 'Drama';
      fun = this.tieneGenero;
    } else if (this.name == 'cienciaficcion') {
      filterName = 'Ciencia Ficción';
      fun = this.tieneGenero;
    } else if (this.name == 'musical') {
      filterName = 'Musical';
      fun = this.tieneGenero;
    } else if (this.name == 'fantasia') {
      filterName = 'Fantasía';
      fun = this.tieneGenero;
    } else if (this.name == 'terror') {
      filterName = 'Terror';
      fun = this.tieneGenero;
    } else if (this.name == 'infantil') {
      filterName = 'Infantil';
      fun = this.tieneGenero;
    }

    else if (this.name == 'golden') {
      filterName = 'Premios Globo de Oro';
      fun = this.tienePremio;
    } else if (this.name == 'oscars') {
      filterName = 'Premios Oscar';
      fun = this.tienePremio;
    }

    let peliculasFiltradas: PeliculaDetail[] = peliculas.filter((pelicula) => {
      return fun(pelicula, filterName);
    });
    return peliculasFiltradas;
  }

  nombreContiene(pelicula: PeliculaDetail, busqueda: string): boolean {
    return pelicula.nombre.includes(busqueda);
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

  tienePremio(pelicula: PeliculaDetail, premio: string): boolean {
    let esta: boolean = false;
    pelicula.premios.forEach((prem) => {
      if (prem.nombre == premio) {
        esta = true;
      }
    });

    return esta;
  }

  tieneGenero(pelicula: PeliculaDetail, genero: string): boolean {
    let esta: boolean = false;
    pelicula.generos.forEach((gen) => {
      if (gen.nombre == genero) {
        esta = true;
      }
    });

    return esta;
  }

  desdeFecha(pelicula: PeliculaDetail, fecha: string): boolean {
    return pelicula.fechaEstreno > fecha;
  }
}
