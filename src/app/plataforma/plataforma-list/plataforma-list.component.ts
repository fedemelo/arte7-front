import { Component, Input,OnInit } from '@angular/core';
import { Plataforma } from '../plataforma';

@Component({
  selector: 'app-plataforma-list',
  templateUrl: './plataforma-list.component.html',
  styleUrls: ['./plataforma-list.component.css']
})
export class PlataformaListComponent implements OnInit {

  @Input() plataformas!: Array<Plataforma>;

  constructor() { }

  ngOnInit() {
  }

}
