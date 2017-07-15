import {RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import { ModuleWithProviders } from '@angular/core';
import { Pagina21Component } from './Componentes/pagina21/pagina21.component';
import { Pagina22Component } from './Componentes/pagina22/pagina22.component';
import { Pagina23Component } from './Componentes/pagina23/pagina23.component';
import { LoginComponent } from './Componentes/login/login.component';
/**
 * Created by USRDEL on 21/6/17.
 */
export const routes: Routes = [
  {
    path: 'index',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'page2/:idPag2/page3/:idPag3',
    component: Pagina2Component,
    children: [
      {
        path: 'page21/:idPartes',
        component: Pagina21Component
      },
      {
        path: 'page22/:idCompetencias',
        component: Pagina22Component
      },
      {
        path: 'page23/:idDuenos',
        component: Pagina23Component
      }
    ]
  }
];
export const ModuloRutas: ModuleWithProviders = RouterModule.forRoot(routes);
