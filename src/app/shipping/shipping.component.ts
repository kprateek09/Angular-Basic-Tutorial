import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts:any;

  constructor(
    private cartService:CartService,
    private cartcomp: CartComponent,
  ) 
  {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

  addToCart(shippingData) {
    this.cartService.addTocart(shippingData);
    //console.log(shippingData.price);
    this.cartcomp.addPriceToCart(shippingData.price);
  }



}