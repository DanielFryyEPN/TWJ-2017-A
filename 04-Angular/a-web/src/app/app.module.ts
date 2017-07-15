import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
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
import {ModuloRutas} from './routes';
import { Pagina21Component } from './Componentes/pagina21/pagina21.component';
import { Pagina22Component } from './Componentes/pagina22/pagina22.component';
import { Pagina23Component } from './Componentes/pagina23/pagina23.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Componentes/login/login.component';
import {TokenService} from "./token.service";

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
    Pagina2Component,
    Pagina21Component,
    Pagina22Component,
    Pagina23Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloRutas,
    NgbModule.forRoot()
  ],
  providers: [
    //http
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
