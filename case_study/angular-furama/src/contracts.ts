export interface Contract {
  id: string;
  customerName: string;
  employeeName: string;
  facilityName: string;
  startDate: string;
  endDate: string;
  deposit: number;
  totalMoney?: number;
}

export const contracts = [
  {
    id: 'HD-0002',
    customerName: 'Nguyen Thanh C',
    employeeName: 'Le Thanh B',
    facilityName: 'Ocean Studio',
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 1000000,
    totalMoney: 2000000
  },
  {
    id: 'HD-0003',
    customerName: 'Nguyen Thanh C',
    employeeName: 'Le Thanh B',
    facilityName: 'Ocean Studio',
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 1000000,
    totalMoney: 2000000
  },
  {
    id: 'HD-0004',
    customerName: 'Nguyen Thanh C',
    employeeName: 'Le Thanh B',
    facilityName: 'Ocean Studio',
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 1000000,
    totalMoney: 2000000
  },
  {
    id: 'HD-0005',
    customerName: 'Nguyen Thanh C',
    employeeName: 'Le Thanh B',
    facilityName: 'Ocean Studio',
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 1000000,
    totalMoney: 2000000
  },
  {
    id: 'HD-0001',
    customerName: 'Nguyen Thanh C',
    employeeName: 'Le Thanh B',
    facilityName: 'Ocean Studio',
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 1000000,
    totalMoney: 2000000
  }

]
