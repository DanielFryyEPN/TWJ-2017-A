/**
 * Created by USRDEL on 3/5/17.
 */
// variables.js
// En JavaScript se define una variable con la palabra reservada <var>
// ENTEROS

var dos = 2;
var tres = 3;
var quince = 15;
var diezYSiete = 17;
console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYSiete);
// Float
var dosPuntoCinco = 2.5;
console.log(dosPuntoCinco);
// Todas las demas
var trueOrFalse = true;
var falso = false;
var nombre = 'Adrian';
var negativo = -4;
var fechaNacimiento = new Date();
var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = false;
cuatroString = -6354;
cuatroString = undefined;
cuatroString = null;
cuatroString = new Date();
var variable;
console.log(variable);
var numero2 = 2;
console.log(typeof numero2);
// OBJETOS JSON
var daniel = {
    id: 1,
    nombre:daniel,
    createdAt: 'hoy',
    updatedAt: new Date(),
    casado: true,
    prestamos: false,
    hijos: null,
    altura: 1.78,
    negativo: -1,
    mascota: {
        nombre: 'Cachetes',
        fechaNacimiento: new Date()
    }
};
console.log('OBJETO:', daniel);
console.log('Altura:', daniel.altura);
console.log(daniel.mascota.fechaNacimiento);
daniel.altura = 1.62;
console.log('Altura:', daniel.altura);
daniel.altura = {
    ancho: 2.4,
    alto: 1.79
};
console.log('Altura:', daniel.altura);
// Borrando atributos o propiedades del objeto
delete daniel.altura;
console.log('Objeto:', daniel);
// Añadiendo atributos o propiedades al objeto
daniel.juego = 'varios';
console.log('Objeto:', daniel);
var arreglo = [1, 'hola', true, 2.4, null, undefined, new Date(), -643, {a: 'b'}];
console.log(arreglo);
console.log(arreglo[4]);
var nuevoObjeto = {
    papas: ['chola', 'chaucha', 'maria'],
    cebollas: ['paiteña', 'perla', 'blanca']
};
var matriz = [[0,1],[2,3]];
console.log(matriz[0][0]);
console.log(nuevoObjeto.papas[1]);
var arregloDeObjetos = [{id: 1, nombre: 'Daniel'}, {id: 2, nombre: 'Felipe'}];
console.log(arregloDeObjetos);
arregloDeObjetos.splice(0,1);
console.log(arregloDeObjetos);
arregloDeObjetos.splice(0,0, {id:3, nombre: 'Carmen'});
console.log(arregloDeObjetos);
