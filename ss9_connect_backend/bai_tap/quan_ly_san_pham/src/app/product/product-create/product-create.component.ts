import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  categories: Category[];
  productForm: FormGroup
  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private route: Router) {
    this.categoryService.getAll().subscribe(
        data => {
          this.categories = data;
          this.productForm = new FormGroup({
            id: new FormControl(),
            name: new FormControl(),
            price: new FormControl(),
            description: new FormControl(),
            category: new FormControl(""),
          });
        }
    )

  }

  ngOnInit() {}
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(
        data => {
          console.log(data);
          this.route.navigateByUrl('/product/list')
        }
    );
    this.productForm.reset();
  }
}
