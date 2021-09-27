import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path:'signin',component:SigninComponent,
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path: "apis",
    loadChildren : () => import('./apiservices/apiservices.module').then(m => m.ApiservicesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
