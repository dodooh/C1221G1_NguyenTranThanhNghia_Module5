import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerRestService} from '../customer-rest.service';
import {CustomerTypeRestService} from '../customer-type-rest.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector   : 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls  : ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;
  customerIdFromRoute: string;
  customerTypes: CustomerType[];
  customerForm: FormGroup = new FormGroup({
    id          : new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
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
    console.log(this.customerIdFromRoute);
    this.customerRestService.getCustomerById(this.customerIdFromRoute).subscribe(
      res => {
        this.customerForm.setValue(res);
      },
    );
    this.customerTypeRestService.getCustomerTypes().subscribe(
      res => this.customerTypes = res,
    );

  }

  onSubmit(customerForm: FormGroup) {
    this.customerRestService.updateCustomer(this.customerIdFromRoute, this.customerForm.value).subscribe(
      res => this.route.navigate(['/customer']),
      err => console.log(err)
    );

  }
}
