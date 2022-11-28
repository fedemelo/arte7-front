export class Reconocimiento {
  id: number;
  nombre: string;
  anio: number;
  categoria: string;

  constructor
  (
    id:number,
    nombre: string,
    anio: number,
    categoria: string
  )
  {
    this.id = id;
    this.nombre = nombre;
    this.anio = anio;
    this.categoria = categoria;
  }
}
