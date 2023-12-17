import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  // Initialize category object
  @Input() category: Category = {
    id: '',
    category_name: ''
  };
}
