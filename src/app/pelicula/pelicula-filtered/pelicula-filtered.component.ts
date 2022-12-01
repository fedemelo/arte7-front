import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../Pelicula.service';
import { PeliculaDetail } from '../pelicula-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula-filtered',
  templateUrl: './pelicula-filtered.component.html',
  styleUrls: ['./pelicula-filtered.component.css'],
})
export class PeliculaFilteredComponent implements OnInit {
  peliculas: Array<PeliculaDetail> = [];
  selectedPelicula!: PeliculaDetail;
  selected: Boolean = false;
  filtro: string = '';

  constructor(
    private peliculaService: PeliculaService,
    private route: ActivatedRoute
  ) {}

  filter(pelis: PeliculaDetail[]): PeliculaDetail[] {
    if (this.filtro === "netflix" || this.filtro === "prime" || this.filtro === "disney" || this.filtro === "hbo") {
      return this.peliculas;
    } else {
      let ppelis: PeliculaDetail[] = [];
      for (let i: number = 0; i < pelis.length; i++) {
        if (pelis[i].nombre.indexOf(this.filtro) != -1) {
          ppelis.push(pelis[i]);
        }
      }
      return ppelis;
    }
  }

  getPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = this.filter(peliculas);
    });
  }

  selectPelicula(peliculaDetail: PeliculaDetail) {
    this.selectedPelicula = peliculaDetail;
    this.selected = true;
  }

  ngOnInit() {
    this.filtro = this.route.snapshot.paramMap.get('filtro') as string;
    this.getPeliculas();
  }

  ngOnDestroy() {
    window.location.reload();
  }
}
