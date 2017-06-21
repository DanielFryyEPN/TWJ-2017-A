import {RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import { ModuleWithProviders } from '@angular/core';
/**
 * Created by USRDEL on 21/6/17.
 */
export const routes: Routes = [
  {
    path: 'index',
    component: InicioComponent
  },
  {
    path: 'page2',
    component: Pagina2Component
  }
];
export const ModuloRutas: ModuleWithProviders = RouterModule.forRoot(routes);
