//ANGIE MELISSA SANTIAGO RODRIGUEZ
//INCISO NO.8
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

    set Nombre(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }

    set Edad(nuevaEdad: number) {
        if (nuevaEdad >= 0) {
            this.edad = nuevaEdad;
        } else {
            console.error("¡ERROR!\nIngrese un Número Valido");
        }
    }

    set Ciudad(nuevaCiudad: string) {
        this.ciudad = nuevaCiudad;
    }

    ImprimirDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Ciudad: ${this.ciudad}`);
    }
}

const persona1 = new Persona("Taylor Swift", 34, "Pensylvannia");
persona1.ImprimirDatos();
