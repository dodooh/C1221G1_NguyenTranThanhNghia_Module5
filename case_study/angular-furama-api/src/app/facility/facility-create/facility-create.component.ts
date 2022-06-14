import {Component, OnInit} from '@angular/core';
import {facilityTypes} from '../../../assets/data/facilityTypeList';
import {rentTypes} from '../../../assets/data/rentTypeList';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';

@Component({
  selector   : 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls  : ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(facilityForm: FormGroup) {

  }
}
