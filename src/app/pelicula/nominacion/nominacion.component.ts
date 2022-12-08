import { Component, Input, OnInit } from '@angular/core';
import { Nominacion } from '../nominacion';

@Component({
  selector: 'app-nominacion',
  templateUrl: './nominacion.component.html',
  styleUrls: [],
})
export class NominacionComponent implements OnInit {
  @Input() nominaciones!: Array<Nominacion>;

  constructor() {}

  ngOnInit() {
    console.log(Component);
    console.log(Input);
  }
}
