//import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class TelnetService  {
  domainUrl:string='LAPTOP-MUJ2BHR9';
  domainPort:string='8084';
  connectUrl:string='http://'+this.domainUrl+':'+this.domainPort+'/TelnetBiMobile/index.jsp';

  constructor (private http:HttpClient){}



  public   conectaServicio():void{
    this.http.post(this.connectUrl,{test:"hola"}).pipe(


  ).subscribe();

  }

}
