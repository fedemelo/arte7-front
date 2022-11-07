import { Component, Input, OnInit } from '@angular/core';

import { Director } from '../director';

@Component({
  selector: 'app-director-detail',
  templateUrl: './director-detail.component.html',
  styleUrls: ['./director-detail.component.css']
})
export class DirectorDetailComponent implements OnInit {


  @Input() directorDetail!:Director;

  constructor() { }

  ngOnInit() {
  }

}
