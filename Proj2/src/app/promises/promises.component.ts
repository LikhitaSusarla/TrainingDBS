import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// export const headers=new HttpHeaders().set("Access-Control-Allow-Origin","*");
@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
response:any;
status:any;
  constructor( public httpclient:HttpClient) { }
// .ToPromise()
// .then((data))
  ngOnInit() {
    // 
    this.postCustomers();

    this.getCustomers();
    this.DeleteCall();
    this.getCustomers();

    
  }
  getThroughTypicode()
  {
    this.httpclient.get("http://jsonplaceholder.typicode.com/posts").toPromise()
    .then(data=>{console.log(data);})
    .catch((error)=>{console.error("404:",error)}),
    (error=>console.error("error",error));
  }
  getCustomers()
  {
    this.httpclient.get("http://localhost:3000/Customers").toPromise()
    .then(data=>{this.response=data;})
    .catch((error)=>{console.error("404:",error)}),
    (error=>console.error("error",error));
  }

  postCustomers()
  {
    this.httpclient.post("http://localhost:3000/Customers",{
      "name":"Customer004",
      "email":"Likki@getMaxListeners.com",
      "tel":"9898008090"
    })
    .toPromise()
    .then(()=>{this.response="Customer creation succesful"})
  }
  PutCall()
  {
    this.httpclient.put("http://localhost:3000/Customers",{
      "name":"Customer004",
      "email":"Likki45@gmail.com",
      "tel":"9898008090"
    })
    .toPromise()
    .then(()=>{this.response="Put is Succesful"})
    console.log("Put is Succesful");
  }
  DeleteCall()
  {
    this.httpclient.delete("http://localhost:3000/Customers/1").subscribe(
      data=>{
         console.log("Delete request is succesful",data);
         this.status="Delete Req is succesful";
      },
      error=>{
        console.log("Error",error);
        this.status="Error";
      }
    );
  }
}
