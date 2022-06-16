import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Facility} from '../model/facility';
import {environment} from "../environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityRestService {
  private baseUrl = `${environment.API_URL}/facilities`;

  constructor(private http: HttpClient) {
  }

  getFacilities() {
    return this.http.get<Facility[]>(this.baseUrl);
  }
  updateFacility(facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${this.baseUrl}/${facility.id}`, facility);
  }
  postFacility(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(this.baseUrl, facility);
  }
  deleteFacility(id: number): Observable<Facility> {
    return this.http.delete<Facility>(`${this.baseUrl}/${id}`);
  }
  findByIdAndType(id: number, type: number): Observable<Facility> {
    return this.http.get<Facility>(`${this.baseUrl}?id=${id}&facilityType.id=${type}`);
  }
}
