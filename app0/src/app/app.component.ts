import { Component } from '@angular/core';

@Component({
  //decorator (written above class)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'anapp0';
  Status1:boolean;
  Status2:boolean;
  Status3:boolean;
  Status4:boolean;
  a1(p:number)
  {
    if(p==1)
    {
      this.Status1=true;
      this.Status2=false;
      this.Status3=false;
      this.Status4=false;
    }
    if(p==2)
    {
      this.Status1=false;
      this.Status2=true;
      this.Status3=false;
      this.Status4=false;
    }
    if(p==3)
    {
      this.Status1=false;
      this.Status2=false;
      this.Status3=true;
      this.Status4=false;
    }
    if(p==4)
    {
      this.Status1=false;
      this.Status2=false;
      this.Status3=false;
      this.Status4=true;
    }
  }
}
