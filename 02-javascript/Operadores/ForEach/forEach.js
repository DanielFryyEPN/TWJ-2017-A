/**
 * Created by USRDEL on 10/5/17.
 */
//foreach
//operadores

let arregloNumeros = [1, 2, 3, 4, 5, 6];

let resultado = arregloNumeros.forEach((numero, indice) => {
        console.log(indice, numero);
})

console.log('Resultado:', resultado)

function mf(arreglo, funcion) {
    for(let i = 0; i < arreglo.length; i++) {
        funcion(arreglo[i], i, arreglo);
    }
}

mf(arregloNumeros, (valor, index) => {
    console.log(index, valor);
})