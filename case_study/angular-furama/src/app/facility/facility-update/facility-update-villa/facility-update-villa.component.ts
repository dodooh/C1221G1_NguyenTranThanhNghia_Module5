import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Facility} from '../../../model/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {positive_number} from '../../../positive-number.validator';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {FacilityTypeRestService} from '../../facility-type-rest.service';
import {FacilityRestService} from '../../facility-rest.service';
import {FacilityType} from '../../../model/facility-type';

@Component({
  selector   : 'app-facility-update-villa',
  templateUrl: './facility-update-villa.component.html',
  styleUrls  : ['./facility-update-villa.component.css']
})
export class FacilityUpdateVillaComponent implements OnInit {
  rentTypes = rentTypes;
  facility: Facility;
  villaForm: FormGroup;
  facilityType: FacilityType;

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private facilityRestService: FacilityRestService,
              private facilityTypeRestService: FacilityTypeRestService) {
    this.facilityTypeRestService.getByID(1).subscribe(
      data => {
        this.facilityType = data;
      }
    );
  }

  equals(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const facilityIdFromRoute = Number(routeParams.get('facilityId'));
    this.facilityRestService.findByIdAndType(facilityIdFromRoute, 1).subscribe(
      res => {
        this.facility = res[0];
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
          rentType       : new FormControl(this.facility.rentType, [Validators.required]),
          img            : new FormControl('hotel.jpg', [Validators.required])
        });
      },
      err => {
        this.route.navigate(['/error']);
      }
    );

  }

  onSubmit() {
    if (this.villaForm.valid) {
      const villa = this.villaForm.value;
      villa.facilityType = this.facilityType;
      this.facilityRestService.updateFacility(villa).subscribe(
        () => {
        }, () => {
        }, () => {
          this.route.navigate(['/facility']);
        }
      );
    }
  }
}
