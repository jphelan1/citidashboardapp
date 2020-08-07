import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.shippingCosts = this.cartService.getQuestions();
  }
}