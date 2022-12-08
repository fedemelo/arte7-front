import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
})
export class BarraNavegacionComponent implements OnInit {
  constructor(private router: Router) {}

  valor!: string;

  busqueda() {
    let buscado: HTMLInputElement = document.getElementById(
      'busquedita'
    ) as HTMLInputElement;
    this.valor = buscado.value;
  }

  redirectTo(uri: string[]) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(uri));
  }

  ngOnInit() {
    console.log(Component);
  }
}
