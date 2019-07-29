import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CartComponent implements OnInit {

  items;
  checkOutForm;
  static totalPrice=0;
  static removed;  
  //static count=1;

  static flag:number;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) 
  {
    this.items = this.cartService.getItems();
    //console.log(CartComponent.count);
    
    //CartComponent.totalPrice = this.cartService.getPrice();
    //console.log(CartComponent.totalPrice);
      
    //console.log(CartComponent.removed);
    //console.log("It should be displayed only once");
    
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
    CartComponent.totalPrice = 0;
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
  }

  addPriceToCart(price, val?:number)  {
    //console.log(val);
    CartComponent.totalPrice +=  price;
    if(val!=undefined)  {
      CartComponent.flag = 1;
    }
    //console.log(CartComponent.flag);
  }

  clearTheCart(){
    CartComponent.totalPrice = CartComponent.totalPrice - CartComponent.totalPrice;
    this.items = this.cartService.clearCart();
    CartComponent.flag = 0;
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async removeLastItem()  {
    CartComponent.removed = this.cartService.removeFromCart();
    //console.log(CartComponent.removed);
    if(CartComponent.removed!=undefined) {
        
      CartComponent.totalPrice = CartComponent.totalPrice - CartComponent.removed;
    }
    //console.log(CartComponent.totalPrice);
    //this.router.navigate(['/']);
    //await this.delay(0.000001);
    //this.router.navigate(['/cart']);
    //return;

    if(CartComponent.removed == 5.00 || CartComponent.removed == 3.00 || CartComponent.removed == 1.00 ) {
      CartComponent.flag = 0;
    }

  }
  
  get data()  {
    return CartComponent.removed;
  }  

  get OriginalPrice() {
    return CartComponent.totalPrice;
  }

  get flagValue() {
    return CartComponent.flag;
  }

}