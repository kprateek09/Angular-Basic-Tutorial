import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  amount=0;

  constructor(
    private http: HttpClient
  ) { }

  

  addTocart(products) {
    this.items.push(products);
  }

  addPriceToCart(price) {
    this.amount += price;
  }

  removeFromCart(){
    this.items.pop();
  }

  getItems() {
    return this.items;
  }

  getPrice()  {
    return this.amount;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}