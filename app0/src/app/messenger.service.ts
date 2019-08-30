import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  public msgs:any[]=[{title:'first',msgbody:'Hiii..welcome to messenger'},
  {title:'second',msgbody:'Hiii..welcome to 2nd messenger'},
  {title:'third',msgbody:'Hiii..welcome to 3rd messenger'}
]
  constructor() { }
}
