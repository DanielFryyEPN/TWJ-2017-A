/**
 * Created by USRDEL on 16/5/17.
 */
/*console.log("hola mundo");
let holaMundo = `Que tal
mundo cruel`;

console.log(holaMundo);*/
//boolean
let soltero: boolean = true; //false
//number
let decimal: number = -6.7;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
//string
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

//array
let notas: number[] = [1, 2, 3];
let jaladas: Array<number> = [1, 2, 3];

//tuplas
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let nombre: UsuarioLogin = {
    nombre: "daniel",
    apellido: "freire"
};

interface UsuarioLogin {
    nombre:string,
    apellido:string,
    direccion?:string
};

/*
class Persona {
    nombre: string; //public por defecto
    private apellido: string;
    fechaNacimiento: Date;
    constructor(nombre: string, apellido: string, fechaNacimiento?: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }
}*/

class Persona {
    nombre: string; //public por defecto
    apellido: string;
    fechaNacimiento: Date;
    constructor(nombre?: string, apellido?: string, fechaNacimiento?: Date) {
    }
    imprimirPersona(): UsuarioLogin {
        console.log(this.nombre, this.apellido, this.fechaNacimiento);
        this.imprimirNombre(this.nombre);
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    }
    private imprimirNombre(nombre: string, apellido?: string) {
        if(apellido)
            console.log(nombre, apellido);
        else
            console.log(nombre);
    }
}

let daniel: Persona = new Persona();
daniel.nombre = "Daniel";
daniel.apellido = "Freire";
daniel.fechaNacimiento = new Date("1900-01-01");
daniel.imprimirPersona();

function add(x: number, y: number): number {
    return x + y;
}

let res: number = add(10, 20);
console.log(res);

