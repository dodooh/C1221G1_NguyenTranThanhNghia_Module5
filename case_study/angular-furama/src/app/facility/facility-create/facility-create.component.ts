import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector   : 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls  : ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(facilityForm: FormGroup) {

  }
}
