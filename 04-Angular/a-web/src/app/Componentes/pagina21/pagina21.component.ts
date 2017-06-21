import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina21',
  templateUrl: './pagina21.component.html',
  styleUrls: ['./pagina21.component.css']
})
export class Pagina21Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Parametros ruta actual
    this.route.params.subscribe(params => {
      console.log('Parametros pag21', params);
    });
    // Parametros de la ruta papa
    this.route.parent.params.subscribe(params => {
      console.log('Parametros papa', params);
    });
  }
}
