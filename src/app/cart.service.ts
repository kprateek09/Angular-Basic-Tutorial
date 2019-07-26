import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  amount=0;
  removedItem:any;

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
    this.removedItem = this.items.pop();
    //console.log(this.removedItem.price);
    return this.removedItem.price;
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