import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../model/contract';
import {Observable} from 'rxjs';
import {environment} from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ContractRestService {

  private baseUrl = `${environment.API_URL}/contracts`;

  constructor(private httpClient: HttpClient) {
  }

  getContracts(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.baseUrl);
  }

  postContract(contract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>(this.baseUrl, contract);

  }
}
