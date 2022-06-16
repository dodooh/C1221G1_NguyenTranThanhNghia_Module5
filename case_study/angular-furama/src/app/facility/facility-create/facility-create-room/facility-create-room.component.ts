import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {positive_number} from '../../../positive-number.validator';
import {rentTypes} from '../../../../assets/data/rentTypeList';
import {Router} from '@angular/router';
import {FacilityRestService} from '../../facility-rest.service';
import {FacilityTypeRestService} from '../../facility-type-rest.service';
import {FacilityType} from "../../../model/facility-type";

@Component({
  selector   : 'app-facility-create-room',
  templateUrl: './facility-create-room.component.html',
  styleUrls  : ['./facility-create-room.component.css']
})
export class FacilityCreateRoomComponent implements OnInit {
  rentTypes = rentTypes;
  roomForm: FormGroup;
  facilityType: FacilityType;

  constructor(private route: Router,
              private facilityRestService: FacilityRestService,
              private facilityTypeRestService: FacilityTypeRestService) {
    this.facilityTypeRestService.getByID(3).subscribe(
      data => {
        this.facilityType = data;
      }
    );
  }

  ngOnInit(): void {
    this.roomForm = new FormGroup({
      id         : new FormControl('', [Validators.required]),
      name       : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      area       : new FormControl('', [Validators.required, positive_number]),
      cost       : new FormControl('', [Validators.required, positive_number]),
      maxPeople  : new FormControl('', [Validators.required, positive_number]),
      freeService: new FormControl('', [Validators.required]),
      rentType   : new FormControl(null, [Validators.required]),
      img        : new FormControl('room.jpg', [Validators.required])
    });
  }

  onSubmit() {
    if (this.roomForm.valid) {
      const room = this.roomForm.value;
      room.facilityType = this.facilityType;
      this.facilityRestService.postFacility(room).subscribe(
        () => {
        }, () => {
        }, () => {
          this.route.navigate(['/facility']);
        }
      );
    }

  }
}
