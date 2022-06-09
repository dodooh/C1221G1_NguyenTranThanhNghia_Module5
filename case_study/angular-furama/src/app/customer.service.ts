import {Injectable} from '@angular/core';
import {Customer, customers} from '../customers';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.data.customers.content));
  }
}

interface GetResponse {
  data: {
    customers: {
      content: Customer[]
    }
  };
}
