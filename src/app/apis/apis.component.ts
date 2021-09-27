import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/appservice.service';
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  constructor(private apiserviceapp : AppserviceService) { }

  ngOnInit(): void {
    this.apiserviceapp.getdata().subscribe(res => {
      console.log(res);
    });
  }

}
