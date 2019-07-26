import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkOutForm;
  static totalPrice;
  static removed;  
  static count=1;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
      this.items = this.cartService.getItems();
      //console.log(CartComponent.count);
      if(CartComponent.count==1)  {
        CartComponent.totalPrice = this.cartService.getPrice();
        //console.log(CartComponent.totalPrice);
        CartComponent.count = CartComponent.count - 1;
      }
        
      //console.log(CartComponent.removed);
      //console.log("It should be displayed only once");
      
      this.checkOutForm = this.formBuilder.group(
        {
          name : '',
          address : ''
        }
      );
    }

  get data()  {
    return CartComponent.removed;
  }  

  get OriginalPrice() {
    return CartComponent.totalPrice;
  }
   

  ngOnInit() {
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    CartComponent.totalPrice = 0;
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
  }

  clearTheCart(){
    CartComponent.totalPrice = 0;
    this.items = this.cartService.clearCart();
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
    this.router.navigate(['/']);
    await this.delay(0.000001);
    this.router.navigate(['/cart']);
    
  }
  

}