import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ApisComponent } from './apis/apis.component';


const routes: Routes = [
  {
    path:'signin',component:SigninComponent,
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path: "apis", component:ApisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
