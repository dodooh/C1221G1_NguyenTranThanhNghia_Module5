import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {positive_number} from '../../../positive-number.validator';
import {FacilityService} from '../../facility.service';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {Router} from '@angular/router';
import {FacilityTypeService} from "../../facility-type.service";

@Component({
  selector   : 'app-facility-create-house',
  templateUrl: './facility-create-house.component.html',
  styleUrls  : ['./facility-create-house.component.css']
})
export class FacilityCreateHouseComponent implements OnInit {
  houseForm: FormGroup;
  rentTypes = rentTypes;

  constructor(private route: Router,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService) {
  }

  ngOnInit(): void {
    this.houseForm = new FormGroup({
      id             : new FormControl('', [Validators.required]),
      name           : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      area           : new FormControl('', [Validators.required, positive_number]),
      cost           : new FormControl('', [Validators.required, positive_number]),
      maxPeople      : new FormControl('', [Validators.required, positive_number]),
      floor          : new FormControl('', [Validators.required, positive_number]),
      otherConvenient: new FormControl('', [Validators.required]),
      standardRoom   : new FormControl('', [Validators.required]),
      facilityType   : new FormControl(this.facilityTypeService.findById(2), [Validators.required]),
      rentType       : new FormControl(null, [Validators.required]),
      img            : new FormControl('studio.jpeg', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.houseForm.value);
    this.facilityService.save(this.houseForm.value);
    this.route.navigate(['/facility']);
  }
}
