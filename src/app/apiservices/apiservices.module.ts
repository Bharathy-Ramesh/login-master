import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApisComponent } from 'src/app/apis/apis.component';
import { ApiservicesRoutingModule } from './apiservices-routing.module';


@NgModule({
  declarations: [
    ApisComponent
  ],
  imports: [
    CommonModule,
    ApiservicesRoutingModule
  ]
})
export class ApiservicesModule { }
