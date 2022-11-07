import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../Pelicula.service';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css']
})
export class PeliculaDetailComponent implements OnInit {
  peliculaId!: number;

  @Input() peliculaDetail!: Pelicula;

  constructor( private route: ActivatedRoute, private peliculaService: PeliculaService) {

  }

  getPelicula(){
    this.peliculaService.getPelicula(this.peliculaId).subscribe(pelicula =>{
      this.peliculaDetail = pelicula;
    })
  }

  ngOnInit() {
    if(this.peliculaDetail === undefined){
      this.peliculaId = this.route.snapshot.paramMap.get('id')!
      if(this.peliculaId){
        this.getPelicula();
      }
    }
  }

}
