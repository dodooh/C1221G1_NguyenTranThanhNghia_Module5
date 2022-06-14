import {Injectable} from '@angular/core';
import {FacilityType} from '../model/facility-type';
import {facilityTypes} from '../../assets/data/facilityTypeList';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypes: FacilityType[];

  constructor() {
    this.facilityTypes = facilityTypes;
  }

  findAll() {
    return this.facilityTypes;
  }

  findById(id: number) {
    return this.facilityTypes.find(item => item.id == id);
  }
}
