import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // Initialize categories api
  private apiUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {
  }

  // Get all categories
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  // Get category details by id
  get(id: any): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  // Create a new category
  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // Update an existing category
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Remove a category
  delete(id: any): Observable<Category> {
    return this.http.delete<Category>(`${this.apiUrl}/${id}`);
  }
}
