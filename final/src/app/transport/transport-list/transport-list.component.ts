import {Component, OnInit} from '@angular/core';
import {TransportService} from '../../service/transport.service';
import {Transport} from '../../model/transport.model';
import {Router} from '@angular/router';

@Component({
  selector   : 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls  : ['./transport-list.component.css']
})
export class TransportListComponent implements OnInit {
  transports: Transport[];
  idToDelete: number;
  constructor(
    private route: Router,
    private transportService: TransportService) {
  }

  ngOnInit(): void {
    this.transportService.getAll().subscribe(
      data => this.transports = data
    );
  }

  setIdToDelete(t: Transport) {
    this.idToDelete = t.id;
  }

  deleteTransport() {
    this.transportService.delete(this.idToDelete).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }
}
