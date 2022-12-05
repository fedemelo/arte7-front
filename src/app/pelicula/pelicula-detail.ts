import { Actor } from "../actor/actor";
import { Director } from "../director/director";
import { Pelicula } from "./pelicula";
import { Resenha } from "../resenha/resenha";
import { Premio } from "./premio";
import { Nominacion } from "./nominacion";
import { Genero } from "../genero/genero";
import { Plataforma } from "./plataforma";

export class PeliculaDetail extends Pelicula{
actores: Array<Actor>=[];
directores: Array<Director>=[];
resenhas: Array<Resenha>=[];
premios: Array<Premio> = [];
nominaciones: Array<Nominacion> = [];
generos: Array<Genero> = [];
plataformas: Array<Plataforma> = [];

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
  directores: Array<Director>,
  resenhas: Array<Resenha>,
  premios: Array<Premio>,
  nominaciones: Array<Nominacion>,
  generos: Array<Genero>,
  plataformas: Array<Plataforma>,

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
    estrellasPromedio,
  )
  this.actores = actores;
  this.directores = directores;
  this.resenhas = resenhas;
  this.premios = premios;
  this.nominaciones = nominaciones;
  this.generos = generos;
  this.plataformas = plataformas;
}

}
