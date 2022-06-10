import { Component, OnInit } from '@angular/core';
import {facilityTypes} from '../../../assets/data/facilityTypeList';
import {rentTypes} from '../../../assets/data/rentTypeList';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityType} from "../../model/facility-type";
import {RentType} from "../../model/rent-type";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilityTypes = facilityTypes;
  rentTypes = rentTypes;
  constructor() { }

  facilityForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    floor: new FormControl(),
    otherConvenient: new FormControl(),
    poolArea: new FormControl(),
    standardRoom: new FormControl(),
    freeService: new FormControl(),
    facilityType: new FormGroup({
      id: new FormControl()
    }),
    rentType: new FormGroup({
      id: new FormControl()
    }),
  });

  ngOnInit(): void {
  }

  onSubmit(facilityForm: FormGroup) {

  }
}
