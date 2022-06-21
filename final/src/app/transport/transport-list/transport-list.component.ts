import {Component, OnInit} from '@angular/core';
import {TransportService} from '../../service/transport.service';
import {Transport} from '../../model/transport.model';
import {Router} from '@angular/router';
import {PlaceService} from '../../service/place.service';
import {Place} from '../../model/place.model';

@Component({
  selector   : 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls  : ['./transport-list.component.css']
})
export class TransportListComponent implements OnInit {
  transports: Transport[];
  idToDelete: number;
  companySearch = '';
  fromPlaceIdSearch = '';
  places: Place[];
  constructor(
    private route: Router,
    private transportService: TransportService,
    private placeService: PlaceService) {
  }

  ngOnInit(): void {
    this.getAllPlaces();
    this.getAllTransports();
  }

  getAllTransports() {
    this.transportService.getAll(this.companySearch, this.fromPlaceIdSearch).subscribe(
      data => this.transports = data.content
    );
  }

  setIdToDelete(t: Transport) {
    this.idToDelete = t.transportId;
  }

  deleteTransport() {
    this.transportService.delete(this.idToDelete).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  private getAllPlaces() {
    this.placeService.getAll().subscribe(
      data => this.places = data
    );
  }

}
