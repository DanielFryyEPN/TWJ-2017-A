import {Component, Input, OnInit} from '@angular/core';
import {BorracherasClass} from '../../classes/BorracherasClass';
import {Http} from '@angular/http';

@Component({
  selector: 'app-borracheras',
  templateUrl: './borracheras.component.html',
  styleUrls: ['./borracheras.component.css']
})
export class BorracherasComponent implements OnInit {

  @Input() nuevaBorrachera: BorracherasClass = new BorracherasClass();

  borracheras: BorracherasClass[] = [];

  constructor(private _http: Http) { }

  ngOnInit() {
    this._http
      .get('http://localhost:1337/Borrachera')
      .subscribe(
        (response) => {
          this.borracheras = response.json();
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      );
  }

  crearBorrachera() {
    this._http
      .post('http://localhost:1337/Borrachera', this.nuevaBorrachera)
      .subscribe(
        (response) => {
          this.borracheras.push(response.json());
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
