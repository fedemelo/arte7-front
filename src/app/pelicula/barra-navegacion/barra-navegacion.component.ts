import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
})
export class BarraNavegacionComponent implements OnInit {
  constructor() {}
  valor!: string;

  busqueda() {
    let buscado: HTMLInputElement = document.getElementById(
      'busquedita'
    ) as HTMLInputElement;
    this.valor = buscado.value;
  }

  ngOnInit() {}

  refresh(): void {
    window.location.reload();
  }

}
