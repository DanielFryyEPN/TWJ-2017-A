import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UrlService } from './url.service';

@Injectable()
export class ApiAuthService {
  url: string;
  modelo = 'Auth';
  constructor(private _http: Http,
              private _urlService: UrlService) {
    this.url = this._urlService.url + this.modelo;
  }
  logIn(correo: string, password: string) {
    const metodo = '/logIn';
    const datosAEnviar = {
      correo: correo,
      password: password
    };
    return this._http.post(this.url + metodo, datosAEnviar);
  }
}
