import { Injectable } from '@angular/core';
import {contracts} from '../../assets/data/contractList';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contracts = contracts;
  constructor() { }

  findAll() {
    return this.contracts;
  }

  save(value: any) {
    this.contracts.push(value);
  }
}
