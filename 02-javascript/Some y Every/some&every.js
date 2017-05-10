/**
 * Created by USRDEL on 10/5/17.
 */
//some y every
//operadores

let arreglo = [8, 6, 9, 10, 4, 2, 7, 8];

let notasDeSupletorio = arreglo
        .map((valor, indice) => {
        return valor/5;
})
.every((valor) => {
    return valor > 0;
});

console.log(notasDeSupletorio)