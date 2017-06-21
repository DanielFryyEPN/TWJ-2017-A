import { Component, Input, OnInit } from '@angular/core';
import { AstronomyPictureOfTheDayClass } from '../../classes/AstronomyPictureOfTheDayClass';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-astronomy-picture-of-the-day',
  templateUrl: './astronomy-picture-of-the-day.component.html',
  styleUrls: ['./astronomy-picture-of-the-day.component.css']
})
export class AstronomyPictureOfTheDayComponent implements OnInit {

  @Input() newPicture: AstronomyPictureOfTheDayClass = new AstronomyPictureOfTheDayClass();

  constructor(private _sanitizer: DomSanitizer) { }

  url: SafeUrl;

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustUrl(this.newPicture.url);
  }
}
