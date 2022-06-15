import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(
        data => this.products = data
    );
  }
  delete(id: number) {
    this.productService.deleteById(id).subscribe(
        data => {
          this.getAll()
        }
    );
  }
}
