import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';

import { CartService } from '../cart.service';
//import { Router } from '@angular/router';*/


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  checkOutForm;
  items;
  price;

  constructor(
    private formBuilder: FormBuilder,
    
    private cartService: CartService,

    private cartcomp: CartComponent,
    
  ) 
  {
    this.items = this.cartService.getItems();

    this.price = CartComponent.totalPrice;

    this.checkOutForm = this.formBuilder.group(
      {
        name : '',
        address : ''
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.price = 0;
    CartComponent.totalPrice = 0;
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
   
  }

}