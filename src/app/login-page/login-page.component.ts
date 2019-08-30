import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {TopBarComponent} from '../top-bar/top-bar.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  loginForm;
  loginId;
  pass;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private topBar: TopBarComponent,
  ) 
  {
     this.loginForm = this.formBuilder.group(
      {
        username : '',
        password : ''
      }
    );
    //this.loginForm.username.setValue('kunal');
  }

  updateValue() {
    this.loginForm.username.setValue('Kunal');
  }

  ngOnInit() {
  }

  showPassword() {
    this.loginForm.username = 'thisAcceptsAnything';
  }

  onSubmit(loginData) {
    // if(loginData.username == '' || loginData.password == '' || loginData.username == undefined || loginData.password == undefined )  {
    //   window.alert("Please fill in the details!");
    // }
    // else  {
      console.warn('Your have sucessfully logged in!', loginData);
      //console.log(loginData.username);
      //console.log(loginData.password);
      this.router.navigate(['/productlist']);
      this.loginId = loginData.username;
      this.pass = loginData.password;
      TopBarComponent.nameToDisplay = loginData.username;
      TopBarComponent.flag = 1;
    //}
  }

}