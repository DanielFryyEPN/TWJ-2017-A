import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orbital-period',
  templateUrl: './orbital-period.component.html',
  styleUrls: ['./orbital-period.component.css']
})
export class OrbitalPeriodComponent implements OnInit {

  @Input() orbital_period: number;

  constructor() { }

  ngOnInit() {
  }

}
