import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AstronomyPictureOfTheDayComponent } from './components/astronomy-picture-of-the-day/astronomy-picture-of-the-day.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    AstronomyPictureOfTheDayComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
