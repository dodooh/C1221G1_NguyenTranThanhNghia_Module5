import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeRestService {
  private baseUrl = 'http://localhost:5000/customer-types';

  constructor(private httpClient: HttpClient) {
  }

  getCustomerTypes(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.baseUrl);
  }
}
