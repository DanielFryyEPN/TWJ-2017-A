import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Daniel";
  planetas: PlanetaStarWars;
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
    },
    {
      nombre: "Juan Jose",
      apellido: "Flores",
      conectado: true
    }];

  constructor(private _http:Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!
  }

  ngOnInit() {
    //Esta listo el componente
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

  cargarPlanetas() {
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response => response.json())
      .subscribe(
        (reponse) => {
          console.log("Response: ", reponse);
          console.log(reponse.json());
          let repuesta = reponse.json();
          console.log(repuesta.next);
          this.planetas = repuesta.results;
        },
        (error) => {
          console.log("Error: ", error);
        },
        () => {
          console.log("Finally");
        }
      );
  }
}

interface PlanetaStarWars {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
