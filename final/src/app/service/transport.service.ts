import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transport} from '../model/transport.model';
const API_URL = 'http://localhost:8080/api/transports';
@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private httpClient: HttpClient) {
  }

  // getAll(): Observable<any> {
  //   return this.httpClient.get<any>(API_URL);
  // }

  delete(id): Observable<any> {
    return this.httpClient.delete<any>(`${API_URL}/${id}`);
  }

  findById(id): Observable<Transport> {
    return this.httpClient.get<Transport>(`${API_URL}/${id}`);
  }

  update(transport: Transport): Observable<Transport> {
    return this.httpClient.put<Transport>(`${API_URL}`, transport);
  }

  save(transport: Transport): Observable<Transport> {
    return this.httpClient.post<Transport>(`${API_URL}`, transport);
  }

  getAll(companySearch: string, fromPlaceIdSearch: string): Observable<any> {
    return this.httpClient.get<any>(`${API_URL}?company=${companySearch}&fromPlace=${fromPlaceIdSearch}`);
  }
}
