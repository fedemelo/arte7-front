

export class Pelicula{
   nombre:string;
   poster:string;
     duracionSec:number;
     pais:string;
     fechaEstreno:any;
     url:string;
     visitas:number;
     estrellasPromedio:number;


constructor(
  nombre:string,
  poster:string,
    duracionSec:number,
    pais:string,
    fechaEstreno:any,
    url:string,
    visitas:number,
    estrellasPromedio:number
)
{
  this.nombre=nombre;
  this.poster=poster;
  this.duracionSec=duracionSec;
  this.pais=pais;
  this.fechaEstreno=fechaEstreno;
  this.url=url;
  this.visitas=visitas;
  this.estrellasPromedio=estrellasPromedio;
}
}
