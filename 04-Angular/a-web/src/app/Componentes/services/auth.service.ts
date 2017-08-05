import { Injectable } from '@angular/core';
import { ApiAuthService } from './api-auth.service';
import { TokenService } from '../../token.service';

@Injectable()
export class AuthService {
  estalogueado = false;
  constructor(private _apiAuthService: ApiAuthService, private _tokenService: TokenService) { }

  hacerLogin(correo: string, password: string) {
    this._apiAuthService.logIn(correo, password)
      .subscribe(
        token => {
          this._tokenService.token = token.text();
          this.estalogueado = true;
        },
        errorServidor => {
          console.log('Error sfdafad');
        }
      );
  }

  hacerLogout() {
    this._tokenService.token = '';
    this.estalogueado = false;
  }
}
