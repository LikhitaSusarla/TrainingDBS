import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  valueForProp:string;
  resultOfEvent:string;
  public customEventHandler()
  {
    this.resultOfEvent="Event Triggerd";
    
  }
  constructor() { }

  ngOnInit() {
  }

}
