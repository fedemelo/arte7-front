import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-filtros',
  templateUrl: './menu-filtros.component.html',
  styleUrls: ['./menu-filtros.component.css'],
})
export class MenuFiltrosComponent implements OnInit {
  constructor(private router: Router) {}

  valor!: string;

  redirectTo(uri: string[]) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(uri));
  }

  fechar() {
    let fecha: HTMLInputElement = document.getElementById(
      'fecha'
    ) as HTMLInputElement;
    this.valor = fecha.value;
    console.log(this.valor);
  }

  ngOnInit() {}
}
