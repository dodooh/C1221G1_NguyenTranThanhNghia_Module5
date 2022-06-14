import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityRestService {

  private baseUrl = 'http://localhost:5000/facilities';

  constructor(private httpClient: HttpClient) {
  }

  getFacilities() {
    return this.httpClient.get<Facility[]>(this.baseUrl);
  }
}
