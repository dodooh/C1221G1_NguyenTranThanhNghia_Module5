import {Component, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
    selector   : 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls  : ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
    categories: Category[];
    productForm: FormGroup;


    constructor(private productService: ProductService,
                private categoryService: CategoryService,
                private route: Router) {
        this.categoryService.getAll().subscribe(
            data => {
                this.categories = data;
            }
        );

    }

    ngOnInit() {
        this.productForm = new FormGroup({
            id         : new FormControl('', [Validators.required], [this.checkDuplicateId(this.productService)]),
            name       : new FormControl('', [Validators.required]),
            price      : new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            category   : new FormControl(''),
        });
    }

    checkDuplicateId(productService: ProductService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return productService
                .checkIdNotTaken(control.value)
                .pipe(
                    map((result) => {
                            return result ? null : {idAlreadyExists: true};
                        }
                    )
                );
        };
    };

    submit() {
        if (this.productForm.valid) {
            const product = this.productForm.value;
            this.productService.saveProduct(product).subscribe(
                data => {
                    console.log(data);
                    this.route.navigateByUrl('/product/list');
                    this.productForm.reset();
                }
            );
        }
    }
}
