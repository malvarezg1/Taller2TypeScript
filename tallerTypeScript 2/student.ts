
export class Student {
    codigo: number;
    cedula: number;
    edad: number;
    direccion: string;
    telefono:number;
  
    constructor(codigo: number, cedula: number, edad: number, telefono: number, direccion: string) {
      this.codigo = codigo;
      this.cedula = cedula;
      this.edad = edad;
      this.telefono = telefono;
      this.direccion = direccion;
    }
  }