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


  customerTypes = customerTypes;
  customerForm: FormGroup;
  showMessage = false;

  constructor(
    private router: Router,
    private customerRestService: CustomerRestService
  ) {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id          : new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name        : new FormControl('', [Validators.required]),
      dayOfBirth  : new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      gender      : new FormControl('', [Validators.required]),
      nationalId  : new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
      phone       : new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
      address     : new FormControl('', [Validators.required]),
      mail        : new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl(null, [Validators.required]),
    });
  }


  onSubmit() {
    if (this.customerForm.valid) {
      this.customerRestService.createCustomer(this.customerForm.value).subscribe(
        res => {
          console.log(res);
          this.showMessage = true;
          this.customerForm.reset();
        }, err => {
          console.log(err);
        }
      );
    }

  }
  hideSuccessMessage() {
    this.showMessage = false;
  }
}
