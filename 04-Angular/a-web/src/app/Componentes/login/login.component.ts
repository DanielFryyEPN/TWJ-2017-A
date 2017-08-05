import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../token.service';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string;
  password: string;
  constructor(private _TokenService: TokenService, private _http: Http, private _authService: AuthService) { }

  ngOnInit() {
  }

  login(datos: NgForm) {
    this._authService.hacerLogin(this.correo, this.password);
    console.log(this.correo);
    console.log(this.password);
    this._http
      .get('http://localhost:1337/Auth/logIn?correo=' + this.correo + '&password=' + this.password)
      .subscribe(
        (res) => {
          this._TokenService.token = res.text();
          console.log('Token:', this._TokenService.token);
        },
        (err) => {
          console.log('Error:', err);
        },
        () => {
          console.log('Finally');
        }
      );
  }

  loguearse() {
    this._authService.hacerLogin(this.correo, this.password);
  }

  desloguearse() {
    this._authService.hacerLogout();
  }
}
