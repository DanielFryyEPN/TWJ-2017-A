import {Component, Input, OnInit} from '@angular/core';
import {BorracherasClass} from "../../classes/BorracherasClass";

@Component({
  selector: 'app-borracheras',
  templateUrl: './borracheras.component.html',
  styleUrls: ['./borracheras.component.css']
})
export class BorracherasComponent implements OnInit {

  @Input() borrachera: BorracherasClass;


  constructor() { }

  ngOnInit() {
  }

}
