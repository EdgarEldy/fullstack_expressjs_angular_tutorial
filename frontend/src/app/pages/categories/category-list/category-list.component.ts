import { Component } from '@angular/core';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

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

  // Constructor
  constructor(private categoryService: CategoryService, private modalService: NgbModal) {
  }

  // ngOnInit
  ngOnInit() {
    this.loadCategories();
  }

  // Load categories
  loadCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.categories = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  /*
  * This modal allows to open CategoryForm modal
  * We can create or update a category with the same modal form
   */
  openCategoryModal(category?: Category) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };

    // Open your Bootstrap modal and pass the category to it
    const modalRef = this.modalService.open(CategoryFormComponent, ngbModalOptions);
    modalRef.componentInstance.category = category;

    // Subscribe to the modal's result
    modalRef.result.then(
      (result) => {
        // Handle the result if needed
        this.loadCategories();
      },
      (reason) => {
        // Handle dismissal or other closing reasons
      }
    );
  }
}
