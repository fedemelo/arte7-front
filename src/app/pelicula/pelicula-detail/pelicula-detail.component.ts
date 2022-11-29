import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDetail } from '../pelicula-detail';
import { PeliculaService } from '../Pelicula.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css'],
})
export class PeliculaDetailComponent implements OnInit {
  peliculaId!: string;

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

  ngOnInit() {
    if (this.peliculaDetail === undefined) {
      this.peliculaId = this.route.snapshot.paramMap.get('id')!;
      if (this.peliculaId) {
        this.getPelicula();
      }
    }
  }

  covertSeconds(segundos: number){
    var sec : number = segundos % (24 * 3600)
    var horas: number = Math.floor(sec / 3600)
    sec = sec % 3600
    var minutos: number = Math.floor(sec / 60)
    sec %= 60

    return horas.toString(10)+"h"+minutos.toString(10)+"m"



  }


}
