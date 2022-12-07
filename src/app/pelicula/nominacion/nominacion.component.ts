import { Component, Input, OnInit } from '@angular/core';
import { Nominacion } from '../nominacion';

@Component({
  selector: 'app-nominacion',
  templateUrl: './nominacion.component.html',
  styleUrls: ['./nominacion.component.css'],
})
export class NominacionComponent implements OnInit {
  @Input() nominaciones!: Array<Nominacion>;

  constructor() {}

  ngOnInit() {}
}
