import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }

  getdata(){
    // return new Promise( (resolve,reject) => {
    //   var apiresponse = this.http.get("http://universities.hipolabs.com/search?country=United+States")
    //   if(apiresponse){
    //     resolve("Success")
    //   }else{
    //     reject("Failed")
    //   }
    // }).then(x => {console.log(x)}).catch( y => console.log(y));
    return this.http.post("http://universities.hipolabs.com/search?country=United+States",{title:"Bharathy"});
  }


}
