import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {ShareService} from '../../service/share.service';
import {Router} from '@angular/router';
import {CustomerRestService} from '../customer-rest.service';

@Component({
  selector   : 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls  : ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] | any;
  nameCustomerToDelete: string;
  idCustomerToDelete: string;
  customerPassToModal: Customer;

  constructor(private route: Router,
              private shareService: ShareService,
              private customerRestService: CustomerRestService) {
  }

  ngOnInit(): void {
    this.shareService.emitChange('Customer');
    // this.findAll();
    this.customerRestService.getCustomers().subscribe(
      (response) => {
        this.customers = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  // findAll() {
  //   this.customers = this.customerService.getCustomerListByObjectTS();
  // }

  showMessageDelete(name: string, id: string) {
    this.nameCustomerToDelete = name;
    this.idCustomerToDelete = id;
  }

  deleteCustomer(id: string) {
    console.log(id);
    this.customerRestService.deleteCustomer(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.log(err)
    );

    // this.customerService.deleteCustomerToObjectTS(id);
    //
    // this.findAll();
  }

  passCustomerToModal(customer: any) {
    this.customerPassToModal = customer;
  }
}
