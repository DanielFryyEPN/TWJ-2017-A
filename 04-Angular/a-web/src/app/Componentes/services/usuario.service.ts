import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {UsuarioClass} from '../../Clases/UsuarioClass';
import 'rxjs/add/operator/map';
import { UrlService } from './url.service';

@Injectable()
export class UsuarioService {
  url: string;
  modelo: 'Usuario';
  constructor(private _http: Http,
              private _urlService: UrlService) {
    this.url = this._urlService.url + this.modelo;
  }
  crear(usuario: UsuarioClass) {
    const datosAEnviar = {
      nombre: usuario.nombre,
      password: usuario.password
    };
    return this._http.post(this.url, datosAEnviar).map(res => res.json());
  }
  borrar(usuario: UsuarioClass) {
    return this._http.delete(this.url + `/${usuario.id}`).map(res => res.json());
  }
  editar(usuario: UsuarioClass) {
    const datosAEnviar = {
      nombre: usuario.nombre
    };
    return this._http.put(this.url + `/${usuario.id}`, datosAEnviar).map(res => res.json());
  }
  buscarUnoPorId(id: number) {
    return this._http.get(this.url + `/${id}`).map(res => res.json());
  }
  buscarTodos() {
    return this._http.get(this.url).map(res => res.json());
  }
}
