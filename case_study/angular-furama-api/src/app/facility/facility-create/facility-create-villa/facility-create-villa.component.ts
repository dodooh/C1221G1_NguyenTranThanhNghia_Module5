import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {positive_number} from '../../../positive-number.validator';
import {FacilityService} from '../../../service/facility.service';
import {Router} from '@angular/router';
import {FacilityTypeService} from '../../../service/facility-type.service';

@Component({
  selector: 'app-facility-create-villa',
  templateUrl: './facility-create-villa.component.html',
  styleUrls: ['./facility-create-villa.component.css']
})
export class FacilityCreateVillaComponent implements OnInit {

  backgroundColor = '#D9D9D9';
  progressColor = '#4CAF50';
  progress = 0;
  isLoading = false;
  rentTypes = rentTypes;
  constructor(private route: Router,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService) { }
  villaForm: FormGroup;
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
      facilityType   : new FormControl(this.facilityTypeService.findById(1), [Validators.required]),
      rentType       : new FormControl(null, [Validators.required]),
      img            : new FormControl('hotel.jpg', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.villaForm.value);
    this.facilityService.save(this.villaForm.value);
    this.isLoading = true;
    const interval = setInterval(() => {
      this.progress += 23;
      if (this.progress > 100) {
        clearInterval(interval);
        this.route.navigate(['/facility']);

      }
    }, 400);

  }
}
