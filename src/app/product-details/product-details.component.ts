import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopBarComponent } from '../top-bar/top-bar.component';

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
  check;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private cartcomp: CartComponent,
    private router: Router,
    private top: TopBarComponent,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.products = products[+params.get('productId')];
    });
  }

  addToCart(product)  {
    //window.alert(product.name+" has been added to the cart!");
    if(TopBarComponent.nameToDisplay!=undefined)  {
      this.flag = 1;
      this.cartService.addTocart(product);
      this.cartcomp.addPriceToCart(product.price);
    }
    else  {
      window.alert("Please LogIn to make add products to the cart!");
      this.router.navigate(['/']);

    }
  }

}