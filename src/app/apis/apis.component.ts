import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/appservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  constructor(private apiserviceapp : AppserviceService, private http: HttpClient ) { }

  ngOnInit(): void {
    this.apiserviceapp.getdata().subscribe(res => {
      console.log(res);
    }),(console.error("Caught Error in Component")
    );
    }

  // getdata(){
  //   return new Promise( (resolve,reject) => {
  //     var apiresponse = this.http.get("http://universities.hipolabs.com/search?country=United+States")
  //     console.log(apiresponse);
  //     if(apiresponse){
  //       resolve(apiresponse)
  //     }else{
  //       reject("Failed")
  //     }
  //   }).then(x => {console.log(x)}).catch( y => console.log(y));
  // }
}
