import {AfterContentInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ShareService} from '../../service/share.service';
import {facilities} from '../../../assets/data/facilityList';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilities: Facility[];
  nameFacilityToDelete: string;
  constructor(private facilityService: FacilityService, private shareService: ShareService ) {
    this.facilities = facilityService.findAll();
  }

  ngOnInit(): void {
    this.shareService.emitChange('Facility');
  }
  showMessage(name: any) {
    this.nameFacilityToDelete = name;
  }
}
