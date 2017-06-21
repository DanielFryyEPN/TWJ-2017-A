import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina21',
  templateUrl: './pagina21.component.html',
  styleUrls: ['./pagina21.component.css']
})
export class Pagina21Component implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // Parametros ruta actual
    this._route.params.subscribe(params => {
      console.log('Parametros pag21', params);
    });
    // Parametros de la ruta papa
    this._route.parent.params.subscribe(params => {
      console.log('Parametros papa', params);
    });
  }

  navegarAInicio() {
    this._router.navigate(['page2', 2, 'page3', 3, 'page22', 22]);
  }
}
