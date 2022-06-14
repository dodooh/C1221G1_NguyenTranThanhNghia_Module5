import { Component, OnInit } from '@angular/core';
import {Facility} from '../../../model/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FacilityService} from '../../../service/facility.service';
import {FacilityTypeService} from '../../../service/facility-type.service';
import {positive_number} from '../../../positive-number.validator';
import {rentTypes} from '../../../../assets/data/rentTypeList';

@Component({
  selector: 'app-facility-update-house',
  templateUrl: './facility-update-house.component.html',
  styleUrls: ['./facility-update-house.component.css']
})
export class FacilityUpdateHouseComponent implements OnInit {
  rentTypes = rentTypes;
  facility: Facility;
  houseForm: FormGroup;

  equals(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService) {
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const facilityIdFromRoute = Number(routeParams.get('facilityId'));
    this.facility = this.facilityService.findByIdAndType(facilityIdFromRoute, 2);
    if (this.facility === undefined) {
      this.route.navigate(['/error']);
    }
    console.log(this.facility);
    this.houseForm = new FormGroup({
      id             : new FormControl(this.facility?.id, [Validators.required]),
      name           : new FormControl(this.facility?.name, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      area           : new FormControl(this.facility?.area, [Validators.required, positive_number]),
      cost           : new FormControl(this.facility?.cost, [Validators.required, positive_number]),
      maxPeople      : new FormControl(this.facility?.maxPeople, [Validators.required, positive_number]),
      floor          : new FormControl(this.facility?.floor, [Validators.required, positive_number]),
      otherConvenient: new FormControl(this.facility?.otherConvenient, [Validators.required]),
      standardRoom   : new FormControl(this.facility?.standardRoom, [Validators.required]),
      facilityType   : new FormControl(this.facilityTypeService.findById(2), [Validators.required]),
      rentType       : new FormControl(this.facility.rentType, [Validators.required]),
      img            : new FormControl('studio.jpeg', [Validators.required])
    });
  }

  onSubmit() {
    this.facilityService.update(this.houseForm.value);
    this.route.navigate(['/facility']);
  }

}
