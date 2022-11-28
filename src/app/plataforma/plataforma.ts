export class Plataforma {
  id: number;
  nombre: string;
  url: string;

  constructor(
    id: number,
    nombre: string,
    url: string,
  ){
    this.id = id;
    this.nombre = nombre;
    this.url = url;
  }
}
