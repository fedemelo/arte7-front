import { Component, Input, OnInit } from '@angular/core';
import { Premio } from '../premio';

@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styleUrls: [],
})
export class PremioComponent implements OnInit {
  @Input() premios!: Array<Premio>;

  constructor() {}

  ngOnInit() {
    console.log(Component);
    console.log(Input);
  }
}
