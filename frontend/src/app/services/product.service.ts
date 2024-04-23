import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Initialize products api
  private readonly baseUrl: string = 'http://localhost:3000/api/products';

  constructor(private readonly http: HttpClient) {
  }
}
