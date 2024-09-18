//ANGIE MELISSA SANTIAGO RODRIGUEZ
//INCISO NO.9
export class Persona {
    private nombre: string;
    private edad: number;
    private ciudad: string;

    constructor(nombre: string, edad: number, ciudad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    get Nombre(): string {
        return this.nombre;
    }

    get Edad(): number {
        return this.edad;
    }

    get Ciudad(): string {
        return this.ciudad;
    }

    set Nombre(nombre: string) {
        this.nombre = nombre;
    }

    set Edad(edad: number) {
        this.edad = edad;
    }

    set Ciudad(ciudad: string) {
        this.ciudad = ciudad;
    }
}
