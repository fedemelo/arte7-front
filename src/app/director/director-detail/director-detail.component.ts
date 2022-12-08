import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DirectorDetail } from '../director-detail';
import { DirectorService } from '../director.service';

@Component({
  selector: 'app-director-detail',
  templateUrl: './director-detail.component.html',
  styleUrls: ['./director-detail.component.css'],
})
export class DirectorDetailComponent implements OnInit {
  directorId!: string;
  @Input() directorDetail!: DirectorDetail;

  constructor(
    private route: ActivatedRoute,
    private directorService: DirectorService
  ) {}

  getDirector() {
    this.directorService.getDirector(this.directorId).subscribe((director) => {
      this.directorDetail = director;
    });
  }

  ngOnInit() {
    console.log(Component);
    console.log(Input);
    if (this.directorDetail === undefined) {
      this.directorId = this.route.snapshot.paramMap.get('id')!;
      if (this.directorId) {
        this.getDirector();
      }
    }
  }
}
