import {Injectable} from '@angular/core';
import {environment} from '../environment';
import {HttpClient} from '@angular/common/http';
import {FacilityType} from '../model/facility-type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeRestService {
  private baseUrl = `${environment.API_URL}/facility-types`;

  constructor(private http: HttpClient) {
  }

  getFacilityTypes() {
    return this.http.get<FacilityType[]>(this.baseUrl);
  }

  getByID(id: number): Observable<FacilityType> {
    return this.http.get<FacilityType>(`${this.baseUrl}/${id}`);
  }
}
