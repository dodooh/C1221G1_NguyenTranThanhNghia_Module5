import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../service/share.service';
import {Facility} from '../../model/facility';
import {FacilityRestService} from '../facility-rest.service';

@Component({
  selector   : 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls  : ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilities: Facility[];
  nameFacilityToDelete: string;
  idCustomerToDelete: string;

  constructor(
    private facilityRestService: FacilityRestService,
    private shareService: ShareService) {
    this.getList();
  }

  ngOnInit(): void {
    this.shareService.emitChange('Facility');
  }

  showMessage(name, id) {
    this.nameFacilityToDelete = name;
    this.idCustomerToDelete = id;
  }

  getList() {
    this.facilityRestService.getFacilities().subscribe(
      res => {
        this.facilities = res;
        console.log('REST GET facilities success');
      }, err => {
        console.log(err);
      }
    );
  }

  deleteFacility(id) {
    // this.facilityService.remove(id);
    // this.facilities = this.facilityService.findAll();
  }
}
