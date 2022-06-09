export class Customer {
  id: string;
  name: string;
  dayOfBirth: string;
  gender: boolean;
  nationalId: string;
  phone: string;
  address: string;
  mail: string;
  customerType: string;

  constructor() {
  }
}

export const customers = [
  {
    id: 'CS-0001',
    name: 'Nguyen Van A',
    gender: '1',
    dayOfBirth: '1990-02-02',
    nationalId: '0987878987',
    address: 'Da Nang',
    phone: '0123456789',
    mail: 'codegym2022@codegym.com',
    customerType: 'Diamond'
  },
  {
    id: 'CS-0002',
    name: 'Nguyen Van B',
    gender: '0',
    dayOfBirth: '1990-02-02',
    nationalId: '0987878987',
    address: 'Da Nang',
    phone: '0123456789',
    mail: 'codegym2022@codegym.com',
    customerType: 'Diamond'
  },
  {
    id: 'CS-0003',
    name: 'Nguyen Van C',
    gender: '1',
    dayOfBirth: '1990-02-02',
    nationalId: '0987878987',
    address: 'Da Nang',
    phone: '0123456789',
    mail: 'codegym2022@codegym.com',
    customerType: 'Diamond'
  },
  {
    id: 'CS-0004',
    name: 'Nguyen Van D',
    gender: '0',
    dayOfBirth: '1990-02-02',
    nationalId: '0987878987',
    address: 'Da Nang',
    phone: '0123456789',
    mail: 'codegym2022@codegym.com',
    customerType: 'Diamond'
  },
];
