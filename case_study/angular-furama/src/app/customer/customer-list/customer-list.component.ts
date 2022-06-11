import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {customers} from '../../../assets/data/customerList';
import {ShareService} from '../../share.service';
import {CustomerService} from '../../customer.service';
import {customerTypes} from '../../../assets/data/customerTypeList';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit  {

  customers: Customer[] | any;
  customerTypes = customerTypes;
  nameCustomerToDelete: string;
  idCustomerToDelete: string;
  customerPassToModal: Customer;
  constructor(private route: Router, private shareService: ShareService, private customerService: CustomerService  ) { }

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

  showMessageDelete(name: string, id: string) {
    this.nameCustomerToDelete = name;
    this.idCustomerToDelete = id;
  }

  deleteCustomer(id: string) {
    console.log(id);
    this.customerService.deleteCustomerToObjectTS(id);

    this.findAll();
  }


  passCustomerToModal(customer: any) {
    this.customerPassToModal = customer;
  }
}
