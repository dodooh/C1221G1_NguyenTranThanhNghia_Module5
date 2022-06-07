import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnInit} from '@angular/core';
import {ShareService} from './share.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'Furama Resort';

  constructor(private shareService: ShareService, private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewChecked()  {
    console.log( 'shareService#changeEmitted' );
    this.shareService.changeEmitted$.subscribe(text => {
      this.title = text;
    });
    this.cdRef.detectChanges();
  }
}
