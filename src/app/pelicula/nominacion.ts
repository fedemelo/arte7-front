import { Reconocimiento } from "./reconocimiento";

export class Nominacion extends Reconocimiento{
  constructor(
    id:number,
    nombre: string,
    anio: number,
    categoria: string
  )
  {
    super ( id, nombre, anio, categoria)
  }
}
