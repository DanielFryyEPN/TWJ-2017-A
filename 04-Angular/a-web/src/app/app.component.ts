import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: UsuarioInt = {
    nombre: "",
    apellido: "Freire"
  };

  parrafo:string = "Hola";
  background:string = "blue";

  constructor() {
    this.usuario.nombre = "Daniel";
    console.log("constructor");
    this.holaMundo();
   console.log(this.saludar(this.usuario.nombre, this.usuario.apellido));
    setTimeout(() => {
      this.usuario.nombre = "Enrique"
    }, 1000);
  }

  holaMundo() {
    console.log("Hola mundo")
  }

  saludar(nombre: string, apellido?: string): string {
    return `Hola ${nombre} ${apellido}`;
  }
}

interface UsuarioInt {
  nombre: string,
  apellido: string
}
