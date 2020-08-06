import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

   constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
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

  // POST request to Express server endpoint with the From Data
  postHelpreqs(helpreqData) {
    this.http.post('http://localhost:3000/helpreqs', helpreqData).subscribe(res => {
    });
}
  
}

