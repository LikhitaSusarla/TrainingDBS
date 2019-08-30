import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forTesting';
  msg = 'Hello Testing';


public changeMsg(pMsg)
{
this.msg=pMsg;
return this.msg;
}

}