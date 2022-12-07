import { Usuario } from './usuario';

export class Resenha {
  id: number;
  estrellas: number;
  numeroCaracteres: number;
  texto: string;
  usuario: Usuario;

  constructor(
    id: number,
    estrellas: number,
    numeroCaracteres: number,
    texto: string,
    usuario: Usuario
  ) {
    this.id = id;
    this.estrellas = estrellas;
    this.numeroCaracteres = numeroCaracteres;
    this.texto = texto;
    this.usuario = usuario;
  }
}
