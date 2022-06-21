import {Place} from './place.model';

export interface Transport {
  transportId: number;
  type: string;
  company: string;
  fromPlace: Place;
  toPlace: Place;
  phone: string;
  email: string;
  startTime: string;
  arrivalTime: string;
}
