import { Actor } from "../actor/actor";
import { Pelicula } from "./pelicula";
import { Resenha } from "./Resenha/Resenha";

export class PeliculaDetail extends Pelicula{
actores: Array<Actor>=[];
directores: Array<Actor>=[];
resenhas: Array<Resenha>=[];

constructor(
  id : number,
  nombre:string,
  poster:string,
  duracionSec:number,
  pais:string,
  fechaEstreno:any,
  url:string,
  visitas:number,
  estrellasPromedio:number,
  actores:Array<Actor>,
  resenhas: Array<Resenha>

)
{
  super(id,
    nombre,
    poster,
    duracionSec,
    pais,
    fechaEstreno,
    url,
    visitas,
    estrellasPromedio
  )
  this.actores = actores;
  this.resenhas = resenhas;
}

}
