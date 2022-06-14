import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FacilityService} from '../../facility.service';
import {Facility} from '../../../model/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {positive_number} from '../../../positive-number.validator';
import {FacilityTypeService} from '../../facility-type.service';
import {rentTypes} from "../../../../assets/data/rentTypeList";

@Component({
  selector   : 'app-facility-update-villa',
  templateUrl: './facility-update-villa.component.html',
  styleUrls  : ['./facility-update-villa.component.css']
})
export class FacilityUpdateVillaComponent implements OnInit {
  rentTypes = rentTypes;
  facility: Facility;
  villaForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService) {
  }

  equals(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const facilityIdFromRoute = Number(routeParams.get('facilityId'));
    this.facility = this.facilityService.findByIdAndType(facilityIdFromRoute, 1);
    if (this.facility === undefined) {
      this.route.navigate(['/error']);
    }
    console.log(this.facility);
    this.villaForm = new FormGroup({
      id             : new FormControl(this.facility?.id, [Validators.required]),
      name           : new FormControl(this.facility?.name, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      area           : new FormControl(this.facility?.area, [Validators.required, positive_number]),
      cost           : new FormControl(this.facility?.cost, [Validators.required, positive_number]),
      maxPeople      : new FormControl(this.facility?.maxPeople, [Validators.required, positive_number]),
      floor          : new FormControl(this.facility?.floor, [Validators.required, positive_number]),
      otherConvenient: new FormControl(this.facility?.otherConvenient, [Validators.required]),
      poolArea       : new FormControl(this.facility?.poolArea, [Validators.required, positive_number]),
      standardRoom   : new FormControl(this.facility?.standardRoom, [Validators.required]),
      facilityType   : new FormControl(this.facilityTypeService.findById(1), [Validators.required]),
      rentType       : new FormControl(this.facility.rentType, [Validators.required]),
      img            : new FormControl('hotel.jpg', [Validators.required])
    });
  }

  onSubmit() {
    this.facilityService.update(this.villaForm.value);
    this.route.navigate(['/facility']);
  }
}
