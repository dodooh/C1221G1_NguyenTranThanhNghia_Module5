import {Customer} from './customer';
import {Facility} from './facility';

export interface Contract {
  id: string;
  customer: Customer;
  facility: Facility;
  startDate: string;
  endDate: string;
  deposit: number;
}


