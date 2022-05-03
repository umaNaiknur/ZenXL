import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {
  loginUserData={}
LoginForm=new FormGroup({
  
  email:new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
password:new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(6)])
})
  get email(){
   return this.LoginForm.get('email')
 }
  get password(){
   return this.LoginForm.get('password')
 }
constructor(private auth:AuthService){}


  loginUser(){
    console.log(this.LoginForm.value)
  
    this.auth.loginUser(this.loginUserData).subscribe
    (res=>
      console.log(res),
      err=>
        console.log(err)
      
    )
  }
   
    

}
