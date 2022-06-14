import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {positive_number} from '../../../positive-number.validator';
import {Facility} from '../../../model/facility';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {ActivatedRoute, Router} from '@angular/router';
import {FacilityService} from '../../../service/facility.service';
import {FacilityTypeService} from '../../../service/facility-type.service';

@Component({
  selector   : 'app-facility-update-room',
  templateUrl: './facility-update-room.component.html',
  styleUrls  : ['./facility-update-room.component.css']
})
export class FacilityUpdateRoomComponent implements OnInit {

  rentTypes = rentTypes;
  facility: Facility;
  roomForm: FormGroup;

  equals(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService) {
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const facilityIdFromRoute = Number(routeParams.get('facilityId'));
    this.facility = this.facilityService.findByIdAndType(facilityIdFromRoute, 3);
    if (this.facility === undefined) {
      this.route.navigate(['/error']);
    }
    console.log(this.facility);
    this.roomForm = new FormGroup({
      id          : new FormControl(this.facility.id, [Validators.required]),
      name        : new FormControl(this.facility.name, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      area        : new FormControl(this.facility.area, [Validators.required, positive_number]),
      cost        : new FormControl(this.facility.cost, [Validators.required, positive_number]),
      maxPeople   : new FormControl(this.facility.maxPeople, [Validators.required, positive_number]),
      freeService : new FormControl(this.facility.freeService, [Validators.required]),
      facilityType: new FormControl(this.facilityTypeService.findById(3), [Validators.required]),
      rentType    : new FormControl(this.facility.rentType, [Validators.required]),
      img         : new FormControl('room.jpg ', [Validators.required])
    });
  }

  onSubmit() {
    this.facilityService.update(this.roomForm.value);
    this.route.navigate(['/facility']);
  }
}
