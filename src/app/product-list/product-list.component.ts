import { Component } from '@angular/core';

import { products } from '../products';

import { CartService } from '../cart.service';

import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = products;

  constructor(
    private cartService: CartService,
    private cartcomp: CartComponent,
  ) {}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify()  {
    window.alert("You will be notified when the product goes on sale!");
  }

  addToCart(product)
  {
    //window.alert(product.name+" has been added to the cart");
    this.cartService.addTocart(product);
    this.cartcomp.addPriceToCart(product.price);
    //window.alert(product.price);
  }

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/