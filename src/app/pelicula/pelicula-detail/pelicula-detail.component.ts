import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDetail } from '../pelicula-detail';
import { PeliculaService } from '../Pelicula.service';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css'],
})
export class PeliculaDetailComponent implements OnInit {
  peliculaId!: string;
  desplegarPremios: boolean = false;
  desplegarNominaciones: boolean = false;
  desplegarResenhas: boolean = false;

  @Input() peliculaDetail!: PeliculaDetail;

  constructor(
    private route: ActivatedRoute,
    private peliculaService: PeliculaService
  ) {}

  getPelicula() {
    this.peliculaService.getPelicula(this.peliculaId).subscribe((pelicula) => {
      this.peliculaDetail = pelicula;
    });
  }

  verificarPremios(): void {
    if (this.peliculaDetail.premios.length > 0) {
      this.desplegarPremios = true;
    }
  }

  verificarNominaciones(): void {
    if (this.peliculaDetail.nominaciones.length > 0) {
      this.desplegarNominaciones = true;
    }
  }

  verificarResenhas(): void {
    if (this.peliculaDetail.resenhas.length > 0) {
      this.desplegarResenhas = true;
    }
  }

  ngOnInit() {
    if (this.peliculaDetail === undefined) {
      this.peliculaId = this.route.snapshot.paramMap.get('id')!;
      if (this.peliculaId) {
        this.getPelicula();
      }
    } else {
      this.verificarNominaciones();
      this.verificarPremios();
      this.verificarResenhas();
    }
  }

  convertSeconds(segundos: number) {
    let sec: number = segundos % (24 * 3600);
    let horas: number = Math.floor(sec / 3600);
    sec = sec % 3600;
    let minutos: number = Math.floor(sec / 60);

    return horas.toString(10) + 'h' + minutos.toString(10) + 'm';
  }
}
