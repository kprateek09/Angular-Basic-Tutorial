import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class TopBarComponent implements OnInit {

  static nameToDisplay;
  static flag = 0;
  result;

  constructor(
    private cartcomponent: CartComponent,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  get name()  {
    return TopBarComponent.nameToDisplay;
  }

  get flagValue() {
    return TopBarComponent.flag;
  }

  logOut()  {
    this.result = this.cartcomponent.clearTheCart(1);
    if(this.result == 1)  {
      this.router.navigate(['/']);
      TopBarComponent.nameToDisplay = undefined;
      TopBarComponent.flag = 0;
    }
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/