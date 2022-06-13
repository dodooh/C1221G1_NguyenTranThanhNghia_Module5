import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../service/share.service';
import {Contract} from '../../model/contract';
import {CustomerService} from '../../service/customer.service';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[];

  constructor(
    private contractService: ContractService,
    private shareService: ShareService) { }

  ngOnInit(): void {
    this.contracts = this.contractService.findAll();
    this.shareService.emitChange('Contract');
  }

}
