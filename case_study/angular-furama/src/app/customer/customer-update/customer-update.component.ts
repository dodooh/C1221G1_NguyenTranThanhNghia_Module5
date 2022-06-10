import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../customer.service';
import {customerTypes} from '../../../assets/data/customerTypeList';
import {Customer} from '../../../Customer';
import {customers} from '../../../assets/data/customerList';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private route: Router, private customerService: CustomerService) {
  }

  customer: Customer | undefined;
  customers = customers;
  customerTypes = customerTypes;
  customerForm: FormGroup;

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const customerIdFromRoute = routeParams.get('customerId');
    this.customer = this.customers.find(customer => customer.id === customerIdFromRoute);
    this.customerForm = new FormGroup({
      id          : new FormControl(this.customer.id, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name        : new FormControl(this.customer.name, [Validators.required]),
      dayOfBirth  : new FormControl(this.customer.dayOfBirth, [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      gender      : new FormControl(this.customer.gender, [Validators.required]),
      nationalId  : new FormControl(this.customer.nationalId, [Validators.required, Validators.pattern('^\\d{9}$')]),
      phone       : new FormControl(this.customer.phone, [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
      address     : new FormControl(this.customer.address, [Validators.required]),
      mail        : new FormControl(this.customer.mail, [Validators.required, Validators.email]),
      customerType: new FormGroup({
        id: new FormControl(this.customer.customerType.id, [Validators.required])
      }),
    });
  }

  onSubmit(customerForm: FormGroup) {
    this.customerService.updateCustomerToObjectTs(customerForm.value);
    this.route.navigate(['/customer']);
  }
}
