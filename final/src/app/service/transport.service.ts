import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transport} from '../model/transport.model';
const API_URL = 'http://localhost:5000/transports';
@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Transport[]> {
    return this.httpClient.get<Transport[]>(API_URL);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete<any>(`${API_URL}/${id}`);
  }

  findById(id): Observable<Transport> {
    return this.httpClient.get<Transport>(`${API_URL}/${id}`);
  }

  update(transport: Transport): Observable<Transport> {
    return this.httpClient.put<Transport>(`${API_URL}/${transport.id}`, transport);
  }
}
