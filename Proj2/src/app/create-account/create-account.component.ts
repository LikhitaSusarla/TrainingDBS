import { Component, OnInit } from '@angular/core';
// export  {myfunction};

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor() {}
  userid:number=0;
    Password:string=null;
    mobileStatus:string;
    strStatus:String;
    addrStatus:String;
    nameStatus:String;
    nameS:boolean;    
    mbS:boolean;
    strS:boolean;
    addrS:boolean;
    nomS:boolean;
   


  ngOnInit() {
  }
  
  

  setradio(has_nominee)
  {
    if(has_nominee=='Y') {
      this.nomS=true;
    }else if(has_nominee=='N') {
      this.nomS=false;
    }
  }
  validateName(str:String)
  {
    console.log("String validator function");
    if(str.match(/^[a-zA-Z]*$/))
    {
  this.nameStatus="";
this.nameS=true;
    }  
    else    
    { 
        this.nameStatus="** Enter alphabets only";
        this.nameS=false;
    }
  }
  validateStr(str:String)
  {
    console.log("String validator function");
    if(str.match(/^[a-zA-Z]*$/))
    {
  this.strStatus="";
this.strS=true;
    }  
    else    
    { 
        this.strStatus="** Enter alphabets only";
        this.strS=false;
    }
  }

  validateAddr(addr : String)
  {
    console.log("Address validator function");
    if(addr.length<46&&addr.match(/^[a-zA-Z,./][0-9]*$/))
    {
      this.addrStatus="";
      this.addrS=true;
    }  
    else    
    { 
      if((addr.length>46))
      {
        this.addrStatus="** Address length exceeded ";
        this.addrS=false;

      }
        else if(!(addr.match(/^[a-zA-Z,./][0-9]*$/)))
        {
          this.addrStatus="** Special characters not allowed(except , . /)";
          this.addrS=false;
  
        }
       
    }

    
  }

//      validate() {
      
//     if( document.forms['form1'].Name.value == "" ) {
//        alert( "Please provide your name!" );
//        document.forms['form1'].Name.focus() ;
//        alert( "Please provide your account number!" );
//        return false;
//     }
//     if( document.forms['form1'].account.value == "" ) {
//        alert( "Please provide your account number!" );
//        document.forms['form1'].EMail.focus() ;
//        return false;
//     }
//     if( document.forms['form1'].Zip.value == "" || isNaN( document.forms['form1'].Zip.value ) ||
//        document.forms['form1'].Zip.value.length != 5 ) {
       
//        alert( "Please provide a zip in the format #####." );
//        document.forms['form1'].Zip.focus() ;
//        return false;
//     }
//     if( document.forms['form1'].Country.value == "-1" ) {
//        alert( "Please provide your country!" );
//        return false;
//     }
//     return( true );
//  }

//   myfunction = this.validate();
}
