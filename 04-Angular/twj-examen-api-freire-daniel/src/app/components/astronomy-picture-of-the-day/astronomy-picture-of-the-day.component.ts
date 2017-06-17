import {Component, Input, OnInit} from '@angular/core';
import {AstronomyPictureOfTheDayClass} from '../../classes/AstronomyPictureOfTheDayClass';
import {Http} from '@angular/http';

@Component({
  selector: 'app-astronomy-picture-of-the-day',
  templateUrl: './astronomy-picture-of-the-day.component.html',
  styleUrls: ['./astronomy-picture-of-the-day.component.css']
})
export class AstronomyPictureOfTheDayComponent implements OnInit {

  @Input() newPicture: AstronomyPictureOfTheDayClass = new AstronomyPictureOfTheDayClass();

  constructor(private _http: Http) { }

  ngOnInit() {
    this._http
      .get('https://api.nasa.gov/planetary/apod?api_key=7n1yswIdVMbpWBH42bIJMPPyDu8EP3mhKlhd5k2y')
      .subscribe(
        (response) => {
          console.log('Respuesta: ', response);
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      );
  }

  consultarImagen(picture: AstronomyPictureOfTheDayClass) {
    this._http
      .get('https://api.nasa.gov/planetary/apod?api_key=7n1yswIdVMbpWBH42bIJMPPyDu8EP3mhKlhd5k2y&date=' + picture.date)
      .subscribe(
        (response) => {
          this.newPicture = response.json();
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
