import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-rotational-period',
  templateUrl: './rotational-period.component.html',
  styleUrls: ['./rotational-period.component.css']
})
export class RotationalPeriodComponent implements OnInit {

  @Input() rotation_period: number;

  constructor() { }

  ngOnInit() {
  }

}
