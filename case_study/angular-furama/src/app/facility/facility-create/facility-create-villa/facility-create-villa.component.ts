import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {positive_number} from '../../../positive-number.validator';
import {Router} from '@angular/router';
import {FacilityRestService} from '../../facility-rest.service';
import {FacilityTypeRestService} from "../../facility-type-rest.service";
import {FacilityType} from "../../../model/facility-type";

@Component({
  selector   : 'app-facility-create-villa',
  templateUrl: './facility-create-villa.component.html',
  styleUrls  : ['./facility-create-villa.component.css']
})
export class FacilityCreateVillaComponent implements OnInit {

  backgroundColor = '#D9D9D9';
  progressColor = '#4CAF50';
  progress = 0;
  isLoading = false;
  rentTypes = rentTypes;
  villaForm: FormGroup;
  facilityType: FacilityType;

  constructor(private route: Router,
              private facilityRestService: FacilityRestService,
              private facilityTypeRestService: FacilityTypeRestService) {
    this.facilityTypeRestService.getByID(1).subscribe(
      data => {
        this.facilityType = data;
      }
    );
  }

  ngOnInit(): void {
    this.villaForm = new FormGroup({
      id             : new FormControl('', [Validators.required]),
      name           : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      area           : new FormControl('', [Validators.required, positive_number]),
      cost           : new FormControl('', [Validators.required, positive_number]),
      maxPeople      : new FormControl('', [Validators.required, positive_number]),
      floor          : new FormControl('', [Validators.required, positive_number]),
      otherConvenient: new FormControl('', [Validators.required]),
      poolArea       : new FormControl('', [Validators.required, positive_number]),
      standardRoom   : new FormControl('', [Validators.required]),
      rentType       : new FormControl(null, [Validators.required]),
      img            : new FormControl('hotel.jpg', [Validators.required])
    });
  }

  onSubmit() {
    if (this.villaForm.valid) {
      const villa = this.villaForm.value;
      villa.facilityType = this.facilityType;
      this.facilityRestService.postFacility(villa).subscribe(
        () => {
        }, () => {
        }, () => {
          this.isLoading = true;
          const interval = setInterval(() => {
            this.progress += 23;
            if (this.progress > 100) {
              clearInterval(interval);
              this.route.navigate(['/facility']);
            }
          }, 400);
        }
      );
    }
  }
}
