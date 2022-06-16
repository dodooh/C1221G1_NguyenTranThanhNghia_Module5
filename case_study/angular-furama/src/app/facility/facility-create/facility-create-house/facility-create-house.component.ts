import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {positive_number} from '../../../positive-number.validator';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {Router} from '@angular/router';
import {FacilityTypeService} from '../../facility-type.service';
import {FacilityRestService} from '../../facility-rest.service';
import {FacilityTypeRestService} from '../../facility-type-rest.service';
import {FacilityType} from '../../../model/facility-type';

@Component({
  selector   : 'app-facility-create-house',
  templateUrl: './facility-create-house.component.html',
  styleUrls  : ['./facility-create-house.component.css']
})
export class FacilityCreateHouseComponent implements OnInit {
  houseForm: FormGroup;
  rentTypes = rentTypes;
  facilityType: FacilityType;
  constructor(private route: Router,
              private facilityRestService: FacilityRestService,
              private facilityTypeRestService: FacilityTypeRestService) {
    this.facilityTypeRestService.getByID(2).subscribe(
      data => {
        this.facilityType = data;
      }
    );
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
      rentType       : new FormControl(null, [Validators.required]),
      img            : new FormControl('studio.jpeg', [Validators.required])
    });
  }

  onSubmit() {
    if (this.houseForm.valid) {
      const house = this.houseForm.value;
      house.facilityType = this.facilityType;
      this.facilityRestService.postFacility(house).subscribe(
        () => {
        }, () => {
        }, () => {
          this.route.navigate(['/facility']);
        }
      );
    }
  }
}
