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
  }

  ngOnInit() {
  }

  onSubmit(loginData) {
    console.warn('Your order has been submitted', loginData);
    //console.log(loginData.username);
    //console.log(loginData.password);
    this.router.navigate(['/productlist']);
    TopBarComponent.nameToDisplay = loginData.username;
  }

}