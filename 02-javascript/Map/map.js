/**
 * Created by USRDEL on 10/5/17.
 */
//map
//operadores

let arreglo = [8, 6, 9, 10, 4, 2, 7, 8];
//map sirve para transformar el arreglo
let resultado = arreglo.map((valor, indice) => {
        return valor/5;
});

console.log(resultado)

let arreglo2 = [
    {nombre: "Daniel"},
    {nombre: "Felicia"}
];

let res = arreglo2.map((valor) => {
    valor.nombre = "Sr. o Sra. " + valor.nombre;
valor.fechaCreacion = new Date();
valor.anioCreacion = valor.fechaCreacion.getFullYear();
return valor;
});

console.log(res)