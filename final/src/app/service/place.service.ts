import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transport} from '../model/transport.model';
import {Place} from '../model/place.model';
const API_URL = 'http://localhost:8080/api/places';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Place[]> {
    return this.httpClient.get<Place[]>(API_URL);
  }


}
