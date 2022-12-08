import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../Pelicula.service';
import { PeliculaDetail } from '../pelicula-detail';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css'],
})
export class VistaPrincipalComponent implements OnInit {
  peliculas: Array<PeliculaDetail> = [];
  selectedPelicula!: PeliculaDetail;
  selected: Boolean = false;

  constructor(private peliculaService: PeliculaService) {}

  getPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      peliculas.sort((a, b) => a.estrellasPromedio - b.estrellasPromedio);
      this.peliculas = peliculas;
      peliculas.reverse();
      this.peliculas = peliculas;
    });
  }

  selectPelicula(peliculaDetail: PeliculaDetail) {
    this.selectedPelicula = peliculaDetail;
    this.selected = true;
  }

  ngOnInit() {
    console.log(Component);
    this.getPeliculas();
  }
}
