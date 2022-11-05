import { Actor } from "../actor/actor";
import { Pelicula } from "./pelicula";

export class PeliculaDetail extends Pelicula{
actores: Array<Actor>=[];

constructor(
  nombre:string,
  poster:string,
    duracionSec:number,
    pais:string,
    fechaEstreno:any,
    url:string,
    visitas:number,
    estrellasPromedio:number,
    actores:Array<Actor>
)
{
  super(
    nombre,
    poster,
      duracionSec,
      pais,
      fechaEstreno,
      url,
      visitas,
      estrellasPromedio
  )
  this.actores=actores;
}

}
