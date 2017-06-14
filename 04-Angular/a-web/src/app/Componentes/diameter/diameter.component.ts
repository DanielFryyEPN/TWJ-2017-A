import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-diameter',
  templateUrl: './diameter.component.html',
  styleUrls: ['./diameter.component.css']
})
export class DiameterComponent implements OnInit {

  @Input() diameter: number;

  constructor() { }

  ngOnInit() {
  }

}
