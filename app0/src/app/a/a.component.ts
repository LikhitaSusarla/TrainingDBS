import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  @Input() propA;

  @Output() customEvent= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
