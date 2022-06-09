import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Customer} from '../../../Customer';
import {customers} from '../../../assets/data/customerList';
import {ShareService} from '../../share.service';
import {CustomerService} from '../../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit  {

  customers: Customer[] | any;

  constructor(private shareService: ShareService, private customerService: CustomerService  ) { }

  ngOnInit(): void {
    this.shareService.emitChange('Customer');
    this.findAll();
  }
  // Get from API
  // listCustomer() {
  //   this.customerService.getCustomerList().subscribe(data => {
  //     this.customers = data;
  //   });
  // }

  findAll() {
    this.customers = this.customerService.getCustomerListByObjectTS();
  }
}
