import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {positive_number} from '../../../positive-number.validator';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {FacilityTypeRestService} from '../../facility-type-rest.service';
import {FacilityType} from '../../../model/facility-type';
import {FacilityRestService} from '../../facility-rest.service';

@Component({
  selector   : 'app-facility-update-house',
  templateUrl: './facility-update-house.component.html',
  styleUrls  : ['./facility-update-house.component.css']
})
export class FacilityUpdateHouseComponent implements OnInit {
  rentTypes = rentTypes;
  facility: Facility;
  houseForm: FormGroup;
  facilityType: FacilityType;

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private facilityRestService: FacilityRestService,
              private facilityTypeRestService: FacilityTypeRestService) {
    this.facilityTypeRestService.getByID(2).subscribe(
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
    this.facilityRestService.findByIdAndType(facilityIdFromRoute, 2).subscribe(
      res => {
        this.facility = res[0];
        this.houseForm = new FormGroup({
          id             : new FormControl(this.facility?.id, [Validators.required]),
          name           : new FormControl(this.facility?.name, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
          area           : new FormControl(this.facility?.area, [Validators.required, positive_number]),
          cost           : new FormControl(this.facility?.cost, [Validators.required, positive_number]),
          maxPeople      : new FormControl(this.facility?.maxPeople, [Validators.required, positive_number]),
          floor          : new FormControl(this.facility?.floor, [Validators.required, positive_number]),
          otherConvenient: new FormControl(this.facility?.otherConvenient, [Validators.required]),
          standardRoom   : new FormControl(this.facility?.standardRoom, [Validators.required]),
          rentType       : new FormControl(this.facility.rentType, [Validators.required]),
          img            : new FormControl('studio.jpeg', [Validators.required])
        });
      },
      err => {
        this.route.navigate(['/error']);
      }
    );

  }

  onSubmit() {
    if (this.houseForm.valid) {
      const house = this.houseForm.value;
      house.facilityType = this.facilityType;
      this.facilityRestService.updateFacility(house).subscribe(
        () => {
        }, () => {
        }, () => {
          this.route.navigate(['/facility']);
        }
      );
    }
  }

}
