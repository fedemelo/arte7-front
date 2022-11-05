import { Director } from "./director";
import { Pelicula } from "../pelicula/pelicula";

export class ActorDetail extends Director{
peliculas:Array<Pelicula>=[];

constructor(
  nombre: string,
    fotografia: string,
    nacionalidad: string,
    fechaNacimiento: any,
    biografia: string,
    peliculas: Array<Pelicula>
)
{
super(nombre,
  fotografia,
  nacionalidad,
  fechaNacimiento,
  biografia)
this.peliculas=peliculas;
}
}
