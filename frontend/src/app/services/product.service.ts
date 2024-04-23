import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Initialize products api
  private readonly baseUrl: string = 'http://localhost:3000/api/products';

  constructor() {
  }
}
