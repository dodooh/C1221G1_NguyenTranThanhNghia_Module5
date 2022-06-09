import {Customer} from './customers';
import {Facility} from './facilities';

export interface Contract {
  id: string;
  customer: Customer;
  facility: Facility;
  startDate: string;
  endDate: string;
  deposit: number;
}

export const contracts = [
  {
    id: 'HD-0001',
    customer: {
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
    facility: {
      id: 5,
      name: 'Ocean Hotel',
      roomSize: 69,
      img: 'hotel.jpg'
    },
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 3460000,
  },
  {
    id: 'HD-0002',
    customer: {
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
    facility: {
      id: 1,
      name: 'Ocean Palace',
      roomSize: 43,
      img: 'room.jpg'
    },
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 23000000,
  },
  {
    id: 'HD-0004',
    customer: {
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
    facility: {
      id: 5,
      name: 'Ocean Hotel',
      roomSize: 69,
      img: 'hotel.jpg'
    },
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 10890000,
  },
  {
    id: 'HD-0005',
    customer: {
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
    facility: {
      id: 4,
      name: 'Ocean Palace',
      roomSize: 43,
      img: 'room.jpg'
    },
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 1045000,
  },
  {
    id: 'HD-0006',
    customer: {
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
    facility: {
      id: 4,
      name: 'Ocean Palace',
      roomSize: 43,
      img: 'room.jpg'
    },
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 780000,
  },
]
