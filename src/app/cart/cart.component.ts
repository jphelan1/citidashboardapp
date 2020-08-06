import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Initialize Vars
  items;
  checkoutForm;
  name;
  email;
  help;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
             ) 
    {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      help: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  // Sends completed form to Post endpoint
  onSubmit(customerData) {
    // Resets form
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    // Post request with form data
    this.cartService.postHelpreqs(customerData);
    console.warn('Your order has been submitted', customerData);
  }
}