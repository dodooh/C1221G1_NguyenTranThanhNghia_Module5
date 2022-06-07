import {AfterContentInit, Component, OnInit} from '@angular/core';
import {customers} from '../../customers';
import {ShareService} from '../share.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit  {

  customers = customers;

  constructor(private shareService: ShareService ) { }

  ngOnInit(): void {
    this.shareService.emitChange('Customer');
  }

}
