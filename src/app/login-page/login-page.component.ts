import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
loginForm!:FormGroup
  constructor() { }
  loginSubmit(){}
  

}
