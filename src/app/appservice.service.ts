import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }

  getdata(){
    return new Promise( (resolve,reject) => {
      var apiresponse = this.http.get("http://universities.hipolabs.com/search?country=United+States")
      console.log(apiresponse);
    });
  }

}
