import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerRestService {
  httpOptions: any;
  private baseUrl = 'http://localhost:5000/customers';

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl);
  }

  createCustomer(customer: any) {
    return this.httpClient.post<any>(this.baseUrl, customer);
  }
  getCustomerById(id: string): Observable<Customer> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Customer>(url);
  }
  updateCustomer(id: string, customer: any) {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.put<any>(url, customer);
  }
  deleteCustomer(id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<any>(url);
  }
}
