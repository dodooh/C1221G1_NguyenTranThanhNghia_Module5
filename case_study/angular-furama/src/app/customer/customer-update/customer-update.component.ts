import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerRestService} from '../customer-rest.service';
import {CustomerTypeRestService} from '../customer-type-rest.service';
import {CustomerType} from '../../model/customer-type';
import {customerTypes} from 'src/assets/data/customerTypeList';

@Component({
  selector   : 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls  : ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;
  customerIdFromRoute: string;
  customerTypes: CustomerType[] = customerTypes;
  customerForm: FormGroup = new FormGroup({
    id          : new FormControl(''),
    name        : new FormControl('', [Validators.required]),
    dayOfBirth  : new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
    gender      : new FormControl('', [Validators.required]),
    nationalId  : new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
    phone       : new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
    address     : new FormControl('', [Validators.required]),
    mail        : new FormControl('', [Validators.required, Validators.email]),
    customerType: new FormControl('', [Validators.required]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private customerRestService: CustomerRestService,
    private customerTypeRestService: CustomerTypeRestService) {

  }

  compareByID(itemOne, itemTwo) {
    // tslint:disable-next-line:triple-equals
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

  ngOnInit(): void {
    this.customerIdFromRoute = this.activatedRoute.snapshot.params.customerId;
    if (!this.customerIdFromRoute) {
      this.route.navigate(['/error']);
    }
    this.customerRestService.getCustomerById(this.customerIdFromRoute).subscribe(
      res => {
        this.customerForm.setValue(res);
      },
    );


  }

  onSubmit() {
    if (this.customerForm.valid) {
      this.customerRestService.updateCustomer(this.customerForm.value).subscribe(
        res => {
          this.route.navigate(['/customer']);
        },
        err => console.log(err),
      );
    }
  }
}
