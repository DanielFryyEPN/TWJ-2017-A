import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsuarioClass} from '../../Clases/UsuarioClass';
import {UsuarioService} from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuarioLocal: UsuarioClass;
  @Output() usuarioBorrado = new EventEmitter();

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    console.log(this.usuarioLocal);
  }

  eliminarUsuarioBackEnd(usuario: UsuarioClass, indice: number) {
    this._usuarioService.borrar(usuario)
      .subscribe(
        (usuarioBorrado: UsuarioClass) => {
          this.usuarioBorrado.emit(usuario);
        },
        (err) => {
          console.log('Error', err);
        }
      );
  }

  actualizarUsuario(usuario: UsuarioClass, nombre: string) {
    usuario.nombre = nombre;
    this._usuarioService.editar(usuario)
      .subscribe(
        (usuarioEditado: UsuarioClass) => {
          // El servidor nos dice que se actualizo
          console.log('El usuario se actualizo', usuarioEditado);
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
