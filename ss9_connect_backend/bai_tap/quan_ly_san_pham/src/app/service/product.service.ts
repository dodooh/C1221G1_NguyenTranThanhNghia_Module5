import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {environment} from "../environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    products: Product[] = [];

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(API_URL + '/products');
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<any>(API_URL + '/products', product);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<any>(`${API_URL}/products/${product.id}`, product);

    }

    findById(id: number): Observable<Product> {
        return this.http.get<Product>(`${API_URL}/products/${id}`);
    }

    deleteById(id: number): Observable<Product> {
        return this.http.delete<Product>(`${API_URL}/products/${id}`);
    }
}
