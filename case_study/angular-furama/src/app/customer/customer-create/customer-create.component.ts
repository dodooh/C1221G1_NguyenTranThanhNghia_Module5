import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {Customer} from '../../../customers';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  log(nameInput: NgModel) {
    console.log(nameInput);
  }

  onSubmit(customerCreateForm: NgForm) {
    console.log(this.customer);
  }
}
