import {CustomerType} from './CustomerType';

export interface Customer {
  id: string;
  name: string;
  dayOfBirth: string;
  gender: string;
  nationalId: string;
  phone: string;
  address: string;
  mail: string;
  customerType: CustomerType;
}


