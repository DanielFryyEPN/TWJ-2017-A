import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { RotationalPeriodComponent } from './Componentes/rotational-period/rotational-period.component';
import { OrbitalPeriodComponent } from './Componentes/orbital-period/orbital-period.component';
import { DiameterComponent } from './Componentes/diameter/diameter.component';
import { ClimateComponent } from './Componentes/climate/climate.component';
import { GravityComponent } from './Componentes/gravity/gravity.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    RotationalPeriodComponent,
    OrbitalPeriodComponent,
    DiameterComponent,
    ClimateComponent,
    GravityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    //http

  ],
  bootstrap: [InicioComponent]
})
export class AppModule { }
