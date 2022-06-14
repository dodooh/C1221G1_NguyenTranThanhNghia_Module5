import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  productForm: FormGroup;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const productIdOnRoute =
      this.activatedRoute.snapshot.paramMap.get('productId');
    this.product = this.productService.findById(Number(productIdOnRoute));
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    });
  }
  submit() {
    this.productService.updateById(this.productForm.value);
  }
}
