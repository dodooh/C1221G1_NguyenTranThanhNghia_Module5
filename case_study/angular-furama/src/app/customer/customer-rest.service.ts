import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable, of, throwError} from 'rxjs';
import {environment} from '../environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerRestService {
  httpOptions: any;
  private baseUrl = `${environment.API_URL}/customers`;
  private SPRING_URL = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  // getCustomers(): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(this.baseUrl);
  // }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<GetResponseList>(this.SPRING_URL).pipe(
      map(res => res.data.customers.content)
    );
  }

  // createCustomer(customer: any) {
  //   return this.http.post<any>(this.baseUrl, customer, {headers: this.httpOptions});
  // }
  createCustomer(customer: any) {
    console.log(customer);
    return this.http.post<any>(this.SPRING_URL, customer, {headers: this.httpOptions});
  }

  // getCustomerById(id: string): Observable<Customer> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.get<Customer>(url);
  // }
  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<GetResponse>(`${this.SPRING_URL}/${id}`)
      .pipe(
        map(res => {
          return res.data.customer;
        })
      );
  }

  updateCustomer(customer: any) {
    return this.http.patch<any>(`${this.SPRING_URL}/${customer.id}`, customer);
  }

  deleteCustomer(id: string) {
    return this.http.delete<any>(`${this.SPRING_URL}/${id}`, {headers: this.httpOptions});
  }
}

interface GetResponseList {
  data: {
    customers: {
      content: Customer[]
    }
  };
}

interface GetResponse {
  data: {
    customer: Customer
  };
}
