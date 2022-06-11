import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-modal-customer-detail',
  templateUrl: './modal-customer-detail.component.html',
  styleUrls: ['./modal-customer-detail.component.css']
})
export class ModalCustomerDetailComponent implements OnInit {
  @Input() customer: Customer;
  constructor() { }

  ngOnInit(): void {
  }

}
