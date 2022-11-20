import { Actor } from './actor';

export class ActorDetail extends Actor {
  constructor(
    id: number,
    nombre: string,
    fotografia: string,
    nacionalidad: string,
    fechaNacimiento: any,
    biografia: string
  ) {
    super(id, nombre, fotografia, nacionalidad, fechaNacimiento, biografia);
  }
}
