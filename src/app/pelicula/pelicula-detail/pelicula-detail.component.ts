import { Component, OnInit , Input} from '@angular/core';
import { PeliculaDetail} from '../pelicula-detail'

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css']
})
export class PeliculaDetailComponent implements OnInit {

  @Input() peliculaDetail!: PeliculaDetail;

  constructor() { }

  ngOnInit() {
  }

}
