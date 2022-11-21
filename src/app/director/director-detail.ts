import { Director } from './director';

export class DirectorDetail extends Director {

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
