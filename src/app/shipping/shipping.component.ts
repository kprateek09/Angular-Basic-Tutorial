import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { CartComponent } from '../cart/cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts:any;
  //flag_val = 1;
  static flag_val = false;
  finalPrice;
  static shippingType;
  static shippingPrice;

  constructor(
    private cartService:CartService,
    private cartcomp: CartComponent,
    private router: Router,

  ) 
  {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

  addToCart(shippingData) {
    //this.cartService.addTocart(shippingData);
    //console.log(shippingData.price);
    //console.log(shippingData.type);
    ShippingComponent.shippingType = shippingData.type;
    //this.cartcomp.addPriceToCart(shippingData.price);
    //console.log(this.flag_val);
    ShippingComponent.shippingPrice = shippingData.price;
    ShippingComponent.flag_val = true;
    this.finalPrice = this.cartcomp.OriginalPrice + ShippingComponent.shippingPrice;

  }

  changeShippingType()  {
    ShippingComponent.shippingType = undefined;
    ShippingComponent.shippingPrice = undefined;
    ShippingComponent.flag_val = false;
  }

  get theValueOfFlag()  {
    return ShippingComponent.flag_val;
  }


}