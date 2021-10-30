import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApisComponent } from 'src/app/apis/apis.component';



const routes: Routes = [
  {
    path:'', component:ApisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiservicesRoutingModule { }
