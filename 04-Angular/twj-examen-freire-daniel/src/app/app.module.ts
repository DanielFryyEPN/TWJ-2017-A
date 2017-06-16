import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BorracherasComponent } from './components/borracheras/borracheras.component';

@NgModule({
  declarations: [
    AppComponent,
    BorracherasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BorracherasComponent]
})
export class AppModule { }
