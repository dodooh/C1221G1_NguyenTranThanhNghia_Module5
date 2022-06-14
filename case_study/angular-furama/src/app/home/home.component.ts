import {Component, OnInit} from '@angular/core';
import {ShareService} from '../service/share.service';

@Component({
  selector   : 'app-home',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private shareService: ShareService) {
  }

  ngOnInit(): void {
    this.shareService.emitChange('Home');
  }

}
