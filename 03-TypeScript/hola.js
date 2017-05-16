/**
 * Created by USRDEL on 16/5/17.
 */
/*console.log("hola mundo");
let holaMundo = `Que tal
mundo cruel`;

console.log(holaMundo);*/
//boolean
var soltero = true; //false
//number
var decimal = -6.7;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//string
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
//array
var notas = [1, 2, 3];
var jaladas = [1, 2, 3];
//tuplas
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
//any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var nombre = {
    nombre: "daniel",
    apellido: "freire"
};
;
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
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimiento) {
    }
    Persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido, this.fechaNacimiento);
        this.imprimirNombre(this.nombre);
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    Persona.prototype.imprimirNombre = function (nombre, apellido) {
        if (apellido)
            console.log(nombre, apellido);
        else
            console.log(nombre);
    };
    return Persona;
}());
var daniel = new Persona();
daniel.nombre = "Daniel";
daniel.apellido = "Freire";
daniel.fechaNacimiento = new Date("1900-01-01");
daniel.imprimirPersona();
function add(x, y) {
    return x + y;
}
var res = add(10, 20);
console.log(res);
