import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
    selector   : 'app-product-update',
    templateUrl: './product-update.component.html',
    styleUrls  : ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
    product: Product;
    productForm: FormGroup;
    categories: Category[];
    compareBy(item1, item2) {
        return item1 && item2 && item1.id === item2.id;
    }

    constructor(
        private productService: ProductService,
        private categoryService: CategoryService,
        private activatedRoute: ActivatedRoute,
        private route: Router,
    ) {
    }

    ngOnInit() {
        const productIdOnRoute =
            this.activatedRoute.snapshot.paramMap.get('productId');
        this.categoryService.getAll().subscribe(
            data => this.categories = data
        );
        this.productService.findById(Number(productIdOnRoute)).subscribe(
            product => {
                this.productForm = new FormGroup({
                    id         : new FormControl(product.id),
                    name       : new FormControl(product.name),
                    price      : new FormControl(product.price),
                    description: new FormControl(product.description),
                    category   : new FormControl(product.category)
                });
            }
        );

    }

    submit() {
        this.productService.updateProduct(this.productForm.value).subscribe(
            res => {
                console.log(res);
                this.route.navigateByUrl('/product/list');
            }
        );
    }
}
