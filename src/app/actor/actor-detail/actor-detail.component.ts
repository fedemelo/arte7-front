import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActorDetail } from '../actor-detail';
import { ActorService } from '../actorService.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  actorId!: string;
  @Input() actorDetail!:ActorDetail;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService
  ) { }

getActor(){
  this.actorService.getActor(this.actorId).subscribe(actor=>{
    this.actorDetail=actor;
  })
}

  ngOnInit() {
    if(this.actorDetail === undefined){
      this.actorId=this.route.snapshot.paramMap.get('id')!
      if(this.actorId){
        this.getActor();
      }
    }
  }

}
