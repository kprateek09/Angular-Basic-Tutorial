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
  check;
  numToReturn = 0;
  //static count=1;

  //static flag:number;

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
    
   
  } 

  ngOnInit() {
  }


  addPriceToCart(price)  {
    //console.log(val);
    CartComponent.totalPrice +=  price;
    /*if(val!=undefined)  {
      CartComponent.flag = 1;
    }*/
    //console.log(CartComponent.flag);
  }

  clearTheCart(value): number{
    if(value==0)  {
      if(window.confirm('Are you sure to clear the cart?')== true) {
        CartComponent.totalPrice = CartComponent.totalPrice - CartComponent.totalPrice;
        this.items = this.cartService.clearCart();
        //CartComponent.flag = 0;
      }
        // this.check = window.confirm("Sure to clear cart?");
        // console.log(this.check);

    }
    else if(value==1) {
      this.check = window.confirm("Sure to Log Out?");
      if(this.check== true) {
        this.numToReturn = 1;
        CartComponent.totalPrice = CartComponent.totalPrice - CartComponent.totalPrice;
        this.items = this.cartService.clearCart();
      }
    }
    return this.numToReturn;
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async removeLastItem()  {
    if(window.confirm('Are you sure to remove the last item?')) {
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

      /*if(CartComponent.removed == 5.00 || CartComponent.removed == 3.00 || CartComponent.removed == 1.00 ) {
        CartComponent.flag = 0;
      }*/
    }
  }
  
  get data()  {
    return CartComponent.removed;
  }  

  get OriginalPrice() {
    return CartComponent.totalPrice;
  }

  /*get flagValue() {
    return CartComponent.flag;
  }*/

}