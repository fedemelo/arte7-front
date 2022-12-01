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

  ngOnDestroy() {
    window.location.reload();
  }
}
