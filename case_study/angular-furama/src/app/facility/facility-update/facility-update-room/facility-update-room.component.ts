import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {positive_number} from '../../../positive-number.validator';
import {Facility} from '../../../model/facility';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {ActivatedRoute, Router} from '@angular/router';
import {FacilityTypeRestService} from '../../facility-type-rest.service';
import {FacilityRestService} from '../../facility-rest.service';
import {FacilityType} from '../../../model/facility-type';

@Component({
  selector   : 'app-facility-update-room',
  templateUrl: './facility-update-room.component.html',
  styleUrls  : ['./facility-update-room.component.css']
})
export class FacilityUpdateRoomComponent implements OnInit {

  rentTypes = rentTypes;
  facility: Facility;
  roomForm: FormGroup;
  facilityType: FacilityType;

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private facilityRestService: FacilityRestService,
              private facilityTypeRestService: FacilityTypeRestService) {
    this.facilityTypeRestService.getByID(3).subscribe(
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
    this.facilityRestService.findByIdAndType(facilityIdFromRoute, 3).subscribe(
      res => {
        this.facility = res[0];
        console.log(res[0]);
        this.roomForm = new FormGroup({
          id         : new FormControl(this.facility?.id, [Validators.required]),
          name       : new FormControl(this.facility?.name, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
          area       : new FormControl(this.facility?.area, [Validators.required, positive_number]),
          cost       : new FormControl(this.facility?.cost, [Validators.required, positive_number]),
          maxPeople  : new FormControl(this.facility?.maxPeople, [Validators.required, positive_number]),
          freeService: new FormControl(this.facility?.freeService, [Validators.required]),
          rentType   : new FormControl(this.facility.rentType, [Validators.required]),
          img        : new FormControl('room.jpg ', [Validators.required])
        });
      },
      err => {
        this.route.navigate(['/error']);
      }
    );

  }

  onSubmit() {
    if (this.roomForm.valid) {
      const room = this.roomForm.value;
      room.facilityType = this.facilityType;
      this.facilityRestService.updateFacility(room).subscribe(
        () => {
        }, () => {
        }, () => {
          this.route.navigate(['/facility']);
        }
      );
    }
  }
}
