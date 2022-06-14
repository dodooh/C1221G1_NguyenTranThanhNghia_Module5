import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../service/share.service';
import {Contract} from '../../model/contract';
import {ContractRestService} from '../contract-rest.service';

@Component({
  selector   : 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls  : ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[];

  constructor(
    private contractRestService: ContractRestService,
    private shareService: ShareService) {
  }

  ngOnInit(): void {
    this.shareService.emitChange('Contract');
    this.getList();
  }

  getList() {
    this.contractRestService.getContracts().subscribe(
      res => this.contracts = res,
      err => console.log(err)
    );

  }

}
