/**
 * Created by DanielFryy on 3/5/17.
 */
//Comentarios
console.log('Hello Kitty');

var Daniel = {
    nombre: "Daniel",
    apellido: "Freire",
    fechaNacimiento: new Date(),
    imprimir: function () {
        console.log(this.nombre, this.apellido);
    },
    anio: function () {
        return this.fechaNacimiento.getFullYear();
    },
    diferenciaEdad: function (edadAComparar) {
        return Math.abs(this.anio() - edadAComparar);
    }
};

Daniel.imprimir();
console.log(Daniel.anio());
console.log(Daniel.diferenciaEdad(1996));

