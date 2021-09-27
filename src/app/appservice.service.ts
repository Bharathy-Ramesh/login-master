import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }
  getdata(){
    return this.http.post("http://universities.hipolabs.com/search?country=United+States", {title:'Angular post'});
  }

}
