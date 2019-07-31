import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { FormBuilder } from '@angular/forms';

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

  checkOutForm;
  items;
  price;
  flagg=0;
  flag=0;

  constructor(

    private formBuilder: FormBuilder,

    private cartService:CartService,
    private cartcomp: CartComponent,
    private router: Router,

  ) 
  {
    this.shippingCosts = this.cartService.getShippingPrices();

    this.items = this.cartService.getItems();

    //this.price = CartComponent.totalPrice + ShippingComponent.shippingPrice;


    this.checkOutForm = this.formBuilder.group(
      {
        name : '',
        address : ''
      }
    );

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


   onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.finalPrice = 0;
    CartComponent.totalPrice = 0;
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
    this.flagg = 1;
    this.flag = 1;
    ShippingComponent.flag_val = false;
  }



}