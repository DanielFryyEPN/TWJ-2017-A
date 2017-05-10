/**
 * Created by USRDEL on 10/5/17.
 */
//object literal
function definirObjetoUsuario(nombre){
    return {
        nombre,
        saludar(){
            return "Hola"+this.nombre;
        },
        twitteo(tweet){
            return this.nombre+" twitteo sobre: "+tweet;
        },
    }
}

var nuevaFuncion = (nombre, apellido) => {
    var usuario1 = {
        nombre: nombre,
        apellido
    };
    console.log(usuario1.nombre + usuario1.apellido);

    var usuario2 = {
        nombre
    };
    console.log(usuario2.nombre);
}

nuevaFuncion("Daniel", "Freire")
