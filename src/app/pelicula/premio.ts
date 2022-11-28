import { Reconocimiento } from "./reconocimiento";

export class Premio extends Reconocimiento {

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
