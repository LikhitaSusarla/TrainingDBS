import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifcomp',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfcompComponent implements OnInit {

  constructor() { }
person:string="Vijay";
  show:boolean=false;
  
  ngOnInit() {
  }
Toggleshow()
{
  this.show=!(this.show);
}

}
