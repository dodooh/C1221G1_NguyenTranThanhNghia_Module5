import {FacilityType} from './facility-type';
import {RentType} from './rent-type';

export interface Facility {
  id: number;
  name: string;
  area: number;
  cost: number;
  maxPeople: number;
  floor?: number;
  otherConvenient?: string;
  poolArea?: number;
  standardRoom?: string;
  freeService?: string;
  facilityType: FacilityType;
  rentType: RentType;
  img: string;
}
