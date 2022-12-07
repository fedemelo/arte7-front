export class Pelicula {
  _id: number;
  _nombre: string;
  _poster: string;
  _duracionSec: number;
  _pais: string;
  _fechaEstreno: any;
  _url: string;
  _visitas: number;
  _estrellasPromedio: number;

  constructor(
    _id: number,
    _nombre: string,
    _poster: string,
    _duracionSec: number,
    _pais: string,
    _fechaEstreno: any,
    _url: string,
    _visitas: number,
    _estrellasPromedio: number
  ) {
    this._id = _id;
    this._nombre = _nombre;
    this._poster = _poster;
    this._duracionSec = _duracionSec;
    this._pais = _pais;
    this._fechaEstreno = _fechaEstreno;
    this._url = _url;
    this._visitas = _visitas;
    this._estrellasPromedio = _estrellasPromedio;
  }

  /**
   * Getter nombre
   * @return {string}
   */
  public get nombre(): string {
    return this._nombre;
  }

  /**
   * Getter poster
   * @return {string}
   */
  public get poster(): string {
    return this._poster;
  }

  /**
   * Getter duracionSec
   * @return {number}
   */
  public get duracionSec(): number {
    return this._duracionSec;
  }

  /**
   * Getter pais
   * @return {string}
   */
  public get pais(): string {
    return this._pais;
  }

  /**
   * Getter fechaEstreno
   * @return {any}
   */
  public get fechaEstreno(): any {
    return this._fechaEstreno;
  }

  /**
   * Getter url
   * @return {string}
   */
  public get url(): string {
    return this._url;
  }

  /**
   * Getter visitas
   * @return {number}
   */
  public get visitas(): number {
    return this._visitas;
  }

  /**
   * Getter estrellasPromedio
   * @return {number}
   */
  public get estrellasPromedio(): number {
    return this._estrellasPromedio;
  }

  /**
   * Setter nombre
   * @param {string} value
   */
  public set nombre(value: string) {
    this._nombre = value;
  }

  /**
   * Setter poster
   * @param {string} value
   */
  public set poster(value: string) {
    this._poster = value;
  }

  /**
   * Setter duracionSec
   * @param {number} value
   */
  public set duracionSec(value: number) {
    this._duracionSec = value;
  }

  /**
   * Setter pais
   * @param {string} value
   */
  public set pais(value: string) {
    this._pais = value;
  }

  /**
   * Setter fechaEstreno
   * @param {any} value
   */
  public set fechaEstreno(value: any) {
    this._fechaEstreno = value;
  }

  /**
   * Setter url
   * @param {string} value
   */
  public set url(value: string) {
    this._url = value;
  }

  /**
   * Setter visitas
   * @param {number} value
   */
  public set visitas(value: number) {
    this._visitas = value;
  }

  /**
   * Setter estrellasPromedio
   * @param {number} value
   */
  public set estrellasPromedio(value: number) {
    this._estrellasPromedio = value;
  }
}
