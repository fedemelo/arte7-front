import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../Pelicula.service';


@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent implements OnInit {

  peliculas: Array<Pelicula> = [];

  constructor(private peliculaService: PeliculaService) { }

  getPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = [...peliculas].sort((a, b)=> a.estrellasPromedio - b.estrellasPromedio)
      this.peliculas.reverse()
    });
  }

  ngOnInit() {
    this.getPeliculas();
  }

}
