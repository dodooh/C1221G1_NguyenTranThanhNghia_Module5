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
  findByIdAndType(id: number, typeId: number) {
    return this.facilities.find(item => item.id === id && item.facilityType.id === typeId);
  }

  update(facility: Facility) {
    const facilityIndex = this.facilities.findIndex(item => item.id === facility.id);
    if (facilityIndex === -1) {
      alert('error on update');
    } else {
      this.facilities[facilityIndex] = facility;
    }
  }

}
