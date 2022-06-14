import { Component, OnInit } from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {CustomerService} from '../../service/customer.service';
import {Facility} from '../../model/facility';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  customers: Customer[];
  facilities: Facility[];
  contractForm: FormGroup;

  constructor(private facilityService: FacilityService,
              private customerService: CustomerService,
              private contractService: ContractService,
              private route: Router) {
    this.customers = customerService.getCustomerListByObjectTS();
    this.facilities = facilityService.findAll();
  }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      customer: new FormControl(null, [Validators.required]),
      facility: new FormControl(null, [Validators.required]),
      startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      deposit: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  onSubmit() {
    this.contractService.save(this.contractForm.value);
    this.route.navigate(['/contract']);
  }
}
