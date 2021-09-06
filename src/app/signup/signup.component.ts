import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  signform:FormGroup;
  hide:boolean = true;
  constructor() {
    this.signform = new FormGroup({
      'name': new FormControl(),
      'password': new FormControl(),
      'cpassword': new FormControl(),
      'email': new FormControl('', [Validators.required, Validators.email])     
    });
   }
   StrengthMsg :any;
   strongpwd:any;
   bool:any;
   getErrorMessage() {
     if (this.signform.controls.email.hasError('required')) {
       return 'You must enter a value';
     }
 
     return this.signform.controls.email.hasError('email') ? 'Not a valid email' : '';
   }
  ngOnInit(): void {
    console.log(this.signform);
  }
  SignUP(value:any){
    console.log("check",value);
  }

  typingPwd(){
    this.strongpwd = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    if(this.strongpwd.test(this.signform.controls.password.value)){
      this.bool = true;
      this.StrengthMsg = "Good";
    }else{
      this.StrengthMsg = "Please strength your password";
      this.bool = false;
    }
  }

}
