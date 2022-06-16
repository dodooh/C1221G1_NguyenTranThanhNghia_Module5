import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerRestService} from '../../customer/customer-rest.service';
import {ContractRestService} from '../contract-rest.service';
import {FacilityRestService} from "../../facility/facility-rest.service";

@Component({
  selector   : 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls  : ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  customers: Customer[];
  facilities: Facility[];
  contractForm: FormGroup;

  constructor(private facilityRestService: FacilityRestService,
              private customerRestService: CustomerRestService,
              private contractRestService: ContractRestService,
              private route: Router) {
    customerRestService.getCustomers().subscribe(
      data => this.customers = data
    );
    facilityRestService.getFacilities().subscribe(
      data => this.facilities = data
    );
  }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      customer : new FormControl(null, [Validators.required]),
      facility : new FormControl(null, [Validators.required]),
      startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      endDate  : new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      deposit  : new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  onSubmit() {
    this.contractRestService.postContract(this.contractForm.value).subscribe(
      () => {
      }, () => {
      }, () => {
        this.route.navigate(['/contract']);
      }
    );
  }
}
