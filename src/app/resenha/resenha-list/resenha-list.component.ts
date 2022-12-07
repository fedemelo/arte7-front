import { Component, Input, OnInit } from '@angular/core';
import { Resenha } from '../resenha';
import { ResenhaService } from '../Resenha.service';

@Component({
  selector: 'app-resenha-list',
  templateUrl: './resenha-list.component.html',
  styleUrls: ['./resenha-list.component.css'],
})
export class ResenhaListComponent implements OnInit {
  @Input() resenhas!: Array<Resenha>;

  constructor(private resenhaService: ResenhaService) {}

  getResenhas(): void {
    this.resenhaService.getResenha().subscribe((resenhas: Resenha[]) => {
      this.resenhas = resenhas;
    });
  }

  ngOnInit() {
    this.getResenhas();
  }
}
