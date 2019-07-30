import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

import { CartComponent } from '../cart/cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products;
  flag=0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private cartcomp: CartComponent,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.products = products[+params.get('productId')];
    });
  }

  addToCart(product)  {
    window.alert(product.name+" has been added to the cart!");
    this.flag = 1;
    this.cartService.addTocart(product);
    this.cartcomp.addPriceToCart(product.price);
  }

}