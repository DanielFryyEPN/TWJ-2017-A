/**
 * Created by USRDEL on 3/5/17.
 */
// void
function holaMundo() {
    console.log('Hello world');
}
holaMundo();
// El doble de un entero
function doble(numero) {
    return numero*2;
}
console.log(doble(2));
// multiplicacion de 2 numeros
function multiplicar2(a, b) {
    return a*b;
}
console.log(multiplicar2(5,9));
// guardar el resultado de una funcion
var dos = multiplicar2(1,2);
console.log(dos);
// guardar la funcion
var multiplicacion = multiplicar2;
console.log(multiplicacion(4,6));
var hola = function () {
    console.log('Hello');
}
hola();
console.log(hola()); //undefined
console.log('Hola: ', hola);
function doStuff(algo) {
    algo();
}
doStuff(function () {
    console.log('Hello');
});
function transformarNumero(numero, transformacion) {
    transformacion(numero);
}
transformarNumero(5, function (numero) {
    return numero * 2;
});
transformarNumero(8, function (numero) {
    return numero / 2;
});