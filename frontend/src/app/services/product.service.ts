import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Initialize products api
  private readonly baseUrl: string = 'http://localhost:3000/api/products';

  constructor(private readonly http: HttpClient) {
  }

  // Get all products
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  // Get product details by id
  get(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
