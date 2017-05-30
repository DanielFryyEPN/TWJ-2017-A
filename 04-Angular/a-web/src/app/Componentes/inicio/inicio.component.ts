import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Daniel";
  //cmmand + a y luego command + alt + l
  arregloUsuario = [{
      nombre: "Daniel",
      apellido: "Freire",
      conectado: true
    },
    {
      nombre: "Mashi",
      apellido: "Correa",
      conectado: true
    },
    {
      nombre: "Abdala",
      apellido: "Bucaram",
      conectado: false
    }];

  constructor() { }

  ngOnInit() {
  }

  cambiarNombre(): void {
    this.nombre = "Rafico a Lenin";
  }

  cambiarOtroNombre(): void {
    this.nombre = "Lenin a Rafico";
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre = nombreEtiqueta.value;
  }
}
