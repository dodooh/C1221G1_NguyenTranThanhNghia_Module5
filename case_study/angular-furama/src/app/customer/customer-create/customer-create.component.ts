import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {customerTypes} from '../../../assets/data/customerTypeList';
import {Router} from '@angular/router';
import {CustomerRestService} from '../customer-rest.service';

@Component({
  selector   : 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls  : ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer = {
    id          : '',
    name        : '',
    gender      : '',
    dayOfBirth  : '',
    nationalId  : '',
    address     : '',
    phone       : '',
    mail        : '',
    customerType: null
  };
  customerTypes = customerTypes;
  customerForm: FormGroup;

  constructor(
    private router: Router,
    private customerRestService: CustomerRestService
  ) {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id          : new FormControl(this.customer.id, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name        : new FormControl(this.customer.name, [Validators.required]),
      dayOfBirth  : new FormControl(this.customer.dayOfBirth, [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      gender      : new FormControl(this.customer.gender, [Validators.required]),
      nationalId  : new FormControl(this.customer.nationalId, [Validators.required, Validators.pattern('^\\d{9}$')]),
      phone       : new FormControl(this.customer.phone, [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
      address     : new FormControl(this.customer.address, [Validators.required]),
      mail        : new FormControl(this.customer.mail, [Validators.required, Validators.email]),
      customerType: new FormControl(this.customer.customerType, [Validators.required]),
    });
  }


  onSubmit(customerForm: FormGroup) {
    console.log(customerForm);
    // this.customerService.addCustomerToObjectTS(customerForm.value);
    this.customerRestService.createCustomer(customerForm.value).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
    this.router.navigate(['/customer']);
  }
}
