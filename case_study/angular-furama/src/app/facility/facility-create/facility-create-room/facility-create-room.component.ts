import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {positive_number} from '../../../positive-number.validator';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {Router} from '@angular/router';
import {FacilityService} from '../../facility.service';
import {FacilityTypeService} from "../../facility-type.service";

@Component({
  selector   : 'app-facility-create-room',
  templateUrl: './facility-create-room.component.html',
  styleUrls  : ['./facility-create-room.component.css']
})
export class FacilityCreateRoomComponent implements OnInit {
  rentTypes = rentTypes;
  roomForm: FormGroup;

  constructor(private route: Router,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService) {
  }

  ngOnInit(): void {
    this.roomForm = new FormGroup({
      id          : new FormControl('', [Validators.required]),
      name        : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      area        : new FormControl('', [Validators.required, positive_number]),
      cost        : new FormControl('', [Validators.required, positive_number]),
      maxPeople   : new FormControl('', [Validators.required, positive_number]),
      freeService : new FormControl('', [Validators.required]),
      facilityType: new FormControl(this.facilityTypeService.findById(3), [Validators.required]),
      rentType    : new FormControl(null, [Validators.required]),
      img         : new FormControl('room.jpg', [Validators.required])
    });
  }

  onSubmit() {
    this.facilityService.save(this.roomForm.value);
    this.route.navigate(['/facility']);
  }
}
