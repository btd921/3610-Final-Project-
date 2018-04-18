import { Component, OnInit } from '@angular/core';
import {Position} from './position';
import {POSITION} from './mock-positions-service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
    position = POSITION;

  constructor() { }

  ngOnInit() {
  }

}
