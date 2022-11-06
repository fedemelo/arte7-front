import { Component, OnInit } from '@angular/core';
import { Resenha } from '../Resenha';
import { ResenhaService } from '../Resenha.service';

@Component({
  selector: 'app-Resenha-list',
  templateUrl: './Resenha-list.component.html',
  styleUrls: ['./Resenha-list.component.css']
})
export class ResenhaListComponent implements OnInit {
  resenhas: Array<Resenha> = [];

  constructor(private resenhaService: ResenhaService) { }

  getResenhas():void {
    this.resenhaService.getResenha().subscribe((resenhas) =>{
      this.resenhas = resenhas;
    })
  }

  ngOnInit() {
    this.getResenhas();
  }

}
