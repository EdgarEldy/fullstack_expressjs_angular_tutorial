import { Component } from '@angular/core';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  // Initialize categories array
  categories?: Category[];

  // Initialize category object
  category: Category = {
    id: '',
    category_name: ''
  };
}
