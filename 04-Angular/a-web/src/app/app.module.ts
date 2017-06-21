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
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import {ModuloRutas} from "./routes";

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
    GravityComponent,
    UsuarioComponent,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloRutas
  ],
  providers: [
    //http

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
