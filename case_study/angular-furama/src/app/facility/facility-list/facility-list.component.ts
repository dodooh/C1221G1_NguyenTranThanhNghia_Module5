import {AfterContentInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ShareService} from '../../share.service';
import {facilities} from '../../../assets/data/facilityList';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilities = facilities;
  constructor(private shareService: ShareService ) { }

  ngOnInit(): void {
    this.shareService.emitChange('Facility');
  }

}
