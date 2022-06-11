import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {positive_number} from '../../../positive-number.validator';

@Component({
  selector: 'app-facility-create-villa',
  templateUrl: './facility-create-villa.component.html',
  styleUrls: ['./facility-create-villa.component.css']
})
export class FacilityCreateVillaComponent implements OnInit {
  rentTypes = rentTypes;
  constructor() { }
  villaForm: FormGroup;
  ngOnInit(): void {
    this.villaForm = new FormGroup({
      id             : new FormControl('', [Validators.required]),
      name           : new FormControl('', [Validators.required]),
      area           : new FormControl('', [Validators.required, positive_number]),
      cost           : new FormControl('', [Validators.required]),
      maxPeople      : new FormControl('', [Validators.required]),
      floor          : new FormControl('', [Validators.required]),
      otherConvenient: new FormControl('', [Validators.required]),
      poolArea       : new FormControl('', [Validators.required]),
      standardRoom   : new FormControl('', [Validators.required]),
      facilityType   : new FormGroup({
        id: new FormControl(1, [Validators.required])
      }),
      rentType       : new FormGroup({
        id: new FormControl('', [Validators.required])
      }),
      img            : new FormControl('hotel.jpg', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.villaForm.value);
  }
}
