import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';
import {ShareService} from './service/share.service';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'Furama Resort';

  constructor(private shareService: ShareService, private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    // console.log('shareService#changeTitle');
    this.shareService.changeEmitted$.subscribe(text => {
      this.title = text;
    });
    this.cdRef.detectChanges();
  }
}
