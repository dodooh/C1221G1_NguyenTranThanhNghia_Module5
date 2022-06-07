import { Component, OnInit } from '@angular/core';
import {ShareService} from '../share.service';
import {contracts} from '../../contracts';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts = contracts;

  constructor(private shareService: ShareService ) { }

  ngOnInit(): void {
    this.shareService.emitChange('Contract');
  }

}
