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

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
      this.items = this.cartService.getItems();
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
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
  }

  clearTheCart(){
    this.items = this.cartService.clearCart();
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async removeLastItem()  {
    this.items = this.cartService.removeFromCart();
    this.router.navigate(['/']);
    await this.delay(0.000001);
    this.router.navigate(['/cart']);
    
  }

}