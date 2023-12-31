import { Pelicula } from '../pelicula/pelicula';
import { Actor } from './actor';

export class ActorDetail extends Actor {
  peliculas: Array<Pelicula> = [];

  constructor(
    id: number,
    nombre: string,
    fotografia: string,
    nacionalidad: string,
    fechaNacimiento: any,
    biografia: string,
    peliculas: Array<Pelicula>
  ) {
    super(id, nombre, fotografia, nacionalidad, fechaNacimiento, biografia);
    this.peliculas = peliculas;
  }
}
