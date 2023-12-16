import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // Initialize categories api
  private apiUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {
  }
}
