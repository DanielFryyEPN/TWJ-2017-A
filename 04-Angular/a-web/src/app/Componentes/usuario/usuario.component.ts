import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsuarioClass} from '../../Clases/UsuarioClass';
import {Http} from '@angular/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuarioLocal: UsuarioClass;
  @Output() usuarioBorrado = new EventEmitter();

  constructor(private _http: Http) { }

  ngOnInit() {
    console.log(this.usuarioLocal);
    this._http
      .get('http://localhost:1337/Usuario')
      .subscribe(
        (reponse) => {
          const repuesta = reponse.json();
          this.usuarioLocal = repuesta.map((usuario: UsuarioClass) => {
            usuario.editar = false;
            return usuario;
          });
          console.log('Usuarios: ', this.usuarioLocal);
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
    const indice: number = this.usuarioLocal.indexOf(usuario);
    this._http
      .delete('http://localhost:1337/Usuario?id=' + usuario.id)
      .subscribe(
        (response) => {
          this.usuarios.splice(indice, 1);
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      );
  }

  actualizarUsuario(usuario: UsuarioClass, nombre: string) {
    const actualizacion = {
      nombre: nombre
    };
    this._http
      .put('http://localhost:1337/Usuario/' + usuario.id, actualizacion)
      .map((res) => {
        return res.json();
      }) // snippet -> template de codigo para poder reutilizarlo
      .subscribe(
        (res) => {
          // El servidor nos dice que se actualizo
          console.log('El usuario se actualizo', res);
          this.usuarioLocal.nombre = nombre;
          this.usuarioLocal.editar = !this.usuarioLocal.editar;
        },
        (err) => {
          // Hubo algun problema
          console.log('Hubo un error: ', err);
        },
        () => {
          console.log('Finally');
        }
      );
  }
}
