import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {customers} from '../../assets/data/customerList';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers = customers;
  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.data.customers.content));
  }

  getCustomerListByObjectTS() {
    return this.customers;
  }

  addCustomerToObjectTS(customer) {
    this.customers.push(customer);
  }

  updateCustomerToObjectTs(customer) {
    const indexToUpdate = this.customers.findIndex(item => item.id === customer.id);
    this.customers[indexToUpdate] = customer;
  }

  deleteCustomerToObjectTS(idToDelete: string) {
    this.customers = this.customers.filter(item => item.id !== idToDelete);
  }

  findById(customerIdFromRoute: string) {
    return this.customers.find(customer => customer.id == customerIdFromRoute);
  }
}

interface GetResponse {
  data: {
    customers: {
      content: Customer[]
    }
  };
}
