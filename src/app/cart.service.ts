import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  removedItem:any;

  constructor(
    private http: HttpClient
  ) { }

  

  addTocart(products) {
    this.items.push(products);
  }


  removeFromCart(){
    this.removedItem = this.items.pop();
    //console.log(this.removedItem.price);
    return this.removedItem.price;
  }

  getItems() {
    return this.items;
  }


  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}