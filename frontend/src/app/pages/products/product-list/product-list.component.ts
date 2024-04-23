import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // Initialize products array
  products?: Product[];

  // Constructor
  constructor(
    productService: ProductService,
    modalService: NgbModal,
    toastr: ToastrService
  ) {
  }
}
