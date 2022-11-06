export class Director{
  private _id: number;
  private _nombre: string;
  private _fotografia: string;
  private _nacionalidad: string;
  private _fechaNacimiento: any;
  private _biografia: string;

  constructor
  (_id: number,
  _nombre: string,
  _fotografia: string,
  _nacionalidad: string,
  _fechaNacimiento: any,
  _biografia: string)
  {this._id = _id;
  this._nombre = _nombre;
  this._fotografia = _fotografia;
  this._nacionalidad = _nacionalidad;
  this._fechaNacimiento = _fechaNacimiento;
  this._biografia = _biografia;}

    /**
     * Getter nombre
     * @return {string}
     */
	public get nombre(): string {
		return this._nombre;
	}

    /**
     * Getter fotografia
     * @return {string}
     */
	public get fotografia(): string {
		return this._fotografia;
	}

    /**
     * Getter nacionalidad
     * @return {string}
     */
	public get nacionalidad(): string {
		return this._nacionalidad;
	}

    /**
     * Getter fechaNacimiento
     * @return {any}
     */
	public get fechaNacimiento(): any {
		return this._fechaNacimiento;
	}

    /**
     * Getter biografia
     * @return {string}
     */
	public get biografia(): string {
		return this._biografia;
	}

    /**
     * Setter nombre
     * @param {string} value
     */
	public set nombre(value: string) {
		this._nombre = value;
	}

    /**
     * Setter fotografia
     * @param {string} value
     */
	public set fotografia(value: string) {
		this._fotografia = value;
	}

    /**
     * Setter nacionalidad
     * @param {string} value
     */
	public set nacionalidad(value: string) {
		this._nacionalidad = value;
	}

    /**
     * Setter fechaNacimiento
     * @param {any} value
     */
	public set fechaNacimiento(value: any) {
		this._fechaNacimiento = value;
	}

    /**
     * Setter biografia
     * @param {string} value
     */
	public set biografia(value: string) {
		this._biografia = value;
	}

}
