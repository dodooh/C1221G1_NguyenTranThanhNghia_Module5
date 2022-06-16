import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../model/customer-type';
import {Observable} from 'rxjs';
import {environment} from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeRestService {
  private baseUrl = `${environment.API_URL}/customer-types`;

  constructor(private httpClient: HttpClient) {
  }

  getCustomerTypes(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.baseUrl);
  }
}
