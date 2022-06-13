import { Injectable } from '@angular/core';
import { facilities} from '../../assets/data/facilityList';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilities: Facility[];
  constructor() {
    this.facilities = facilities;
  }
  findAll() {
    return this.facilities;
  }
  save(facility: Facility) {
    this.facilities.push(facility);
  }
  remove(id: number) {
    this.facilities = this.facilities.filter(item => item.id !== id);
  }
}
