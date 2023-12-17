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

  // Save or update a category
  async submit() {
    if (!this.category.id) {
      // Create new category
      const data = {
        category_name: this.category.category_name
      };

      await this.categoryService.create(data).subscribe({
        next: (res) => {
          console.log(res);
          this.activeModal.close('Category has updated successfully');
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      // Update existing category
      await this.categoryService.update(this.category.id, this.category).subscribe({
        next: (res) => {
          console.log(res);
          this.activeModal.close('Category has saved successfully');
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
