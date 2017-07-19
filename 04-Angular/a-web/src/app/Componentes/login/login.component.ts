import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../token.service';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _TokenService: TokenService, private _http: Http) { }

  ngOnInit() {
  }

  login(datos: NgForm) {
    const correo = datos.value.correoV;
    const pass = datos.value.passwordV;
    console.log(correo);
    console.log(pass);
    this._http
      .get('http://localhost:1337/Auth/logIn?correo=' + correo + '&password=' + pass)
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
}
