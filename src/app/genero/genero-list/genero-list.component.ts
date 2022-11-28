import { Component, Input, OnInit } from '@angular/core';
import { Genero } from '../genero';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css']
})
export class GeneroListComponent implements OnInit {

  @Input() generos!: Array<Genero>;

  constructor() { }

  ngOnInit() {
  }

}
