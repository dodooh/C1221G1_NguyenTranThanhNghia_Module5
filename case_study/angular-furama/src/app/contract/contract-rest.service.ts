import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractRestService {

  private baseUrl = 'http://localhost:5000/contracts';

  constructor(private httpClient: HttpClient) {
  }

  getContracts() {
    return this.httpClient.get<Contract[]>(this.baseUrl);
  }
}
