import { Component, OnInit } from '@angular/core';
import { AstronomyPictureOfTheDayClass } from '../../classes/AstronomyPictureOfTheDayClass';
import { Http } from '@angular/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  newPicture: AstronomyPictureOfTheDayClass = new AstronomyPictureOfTheDayClass();

  checkboxFlag: boolean;

  constructor(private _http: Http) { }

  ngOnInit() {
    this.checkboxFlag = false;
    console.log(this.checkboxFlag);
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
