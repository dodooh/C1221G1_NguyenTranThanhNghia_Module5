import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {environment} from "../environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

const API_URL = `${environment.apiUrl}/products`;

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    products: Product[] = [];

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(API_URL);
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<any>(API_URL, product);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<any>(`${API_URL}/${product.id}`, product);

    }

    findById(id: number): Observable<Product> {
        return this.http.get<Product>(`${API_URL}/${id}`);
    }

    // true neu chua trung
    // false neu trung
    checkIdNotTaken(id: number): Observable<boolean> {
        return this.http.get(API_URL).pipe(
            map((productList: Array<Product>) =>
                productList.filter(prd => prd.id === id)
            ),
            map(productList =>
                !productList.length  // length = 1 => false, length = 0 => true
            )
        );
    }


    deleteById(id: number): Observable<Product> {
        return this.http.delete<Product>(`${API_URL}/${id}`);
    }
}
