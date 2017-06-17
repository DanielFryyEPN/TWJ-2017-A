import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AstronomyPictureOfTheDayComponent } from './components/astronomy-picture-of-the-day/astronomy-picture-of-the-day.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AstronomyPictureOfTheDayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AstronomyPictureOfTheDayComponent]
})
export class AppModule { }
