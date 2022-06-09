import {FacilityType} from './FacilityType';
import {RentType} from './RentType';

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
}
