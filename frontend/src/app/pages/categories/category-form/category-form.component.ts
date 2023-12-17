import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../../services/category.service';

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

  constructor(private categoryService: CategoryService, public activeModal: NgbActiveModal) {
  }
}
