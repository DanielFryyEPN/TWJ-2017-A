import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {PlanetaStarWars} from "../../Interfaces/PlanetaStarWars";
import {UsuarioClass} from "../../Clases/UsuarioClass";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre = 'Daniel';

  usuarios: UsuarioClass[] = [];

  nuevoUsuario: UsuarioClass = new UsuarioClass("");

  planetas: PlanetaStarWars[] = [];
  // cmmand + a y luego command + alt + l
  arregloImagenes = [
    'https://vignette1.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg',
    'http://vignette4.wikia.nocookie.net/starwars/images/a/a0/Eaw_Yavin4.jpg',
    'https://vignette4.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png',
    'https://vignette2.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg',
    'https://vignette3.wikia.nocookie.net/starwars/images/2/2c/Bespin_EotECR.png',
    'https://vignette3.wikia.nocookie.net/starwars/images/8/83/EndorSpace.jpg',
    'https://vignette2.wikia.nocookie.net/starwars/images/3/3c/Naboo.png',
    'http://vignette1.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg',
    'https://vignette4.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg',
    'https://vignette2.wikia.nocookie.net/starwars/images/6/6d/Geonosis_AotC.png'
  ];
  arregloUsuario = [{
      nombre: 'Daniel',
      apellido: 'Freire',
      conectado: true
    },
    {
      nombre: 'Mashi',
      apellido: 'Correa',
      conectado: true
    },
    {
      nombre: 'Abdala',
      apellido: 'Bucaram',
      conectado: false
    },
    {
      nombre: 'Juan Jose',
      apellido: 'Flores',
      conectado: true
    }];

  constructor(private _http: Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!
  }

  ngOnInit() {
    //Esta listo el componente
    console.log('Nuevo usuario: ', this.nuevoUsuario);
    this._http
      .get("http://localhost:1337/Usuario")
      .subscribe(
        (reponse) => {
          let repuesta = reponse.json();
          this.usuarios = repuesta;
          console.log("Usuarios: ", this.usuarios);
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      );
  }

  cambiarNombre(): void {
    this.nombre = 'Rafico a Lenin';
  }

  cambiarOtroNombre(): void {
    this.nombre = 'Lenin a Rafico';
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre = nombreEtiqueta.value;
  }

  cargarPlanetas() {
    this._http
      .get('http://swapi.co/api/planets')
      // .map(response => response.json())
      .subscribe(
        (reponse) => {
          console.log('Response: ', reponse);
          console.log(reponse.json());
          let repuesta = reponse.json();
          console.log(repuesta.next);
          this.planetas = repuesta.results;
          this.planetas = this.planetas.map((planeta) => {
            planeta.imagenURL = "assets/Imagenes/" + planeta.name + ".jpg";
            return planeta;
          });
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      );
  }

  crearUsuario() {
    console.log("entro a crear usuario");
    /*let usuario = {
      nombre: this.nuevoUsuario.nombre
    };*/
    this._http
      .post("http://localhost:1337/Usuario", this.nuevoUsuario)
      .subscribe(
        (response) => {
          this.usuarios.push(response.json());
          console.log('Respuesta json: ',response.json());
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      );
  }

  eliminarUsuario(usuario: UsuarioClass) {
    let indice: number = this.usuarios.indexOf(usuario);
    console.log(indice);
    this._http
      .delete("http://localhost:1337/Usuario", this.nuevoUsuario)
      .subscribe(
        (response) => {
          this.usuarios.splice(indice, 1);
          console.log('Respuesta json: ',response.json());
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      );
  }
}
/*
interface PlanetaStarWars {
  imagenURL?: string;
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
*/
