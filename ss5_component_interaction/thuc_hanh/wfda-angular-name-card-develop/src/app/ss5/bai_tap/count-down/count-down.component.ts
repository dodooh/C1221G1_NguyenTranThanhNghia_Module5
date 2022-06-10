import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit{

  currentCount: number;
  message: string;
  MAX_SECOND: number;
  @Output() countOnChange = new EventEmitter();
  private intervalId = 0;

  constructor() {
    this.MAX_SECOND = 20;
    this.reset()
  }


  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
    if (this.currentCount <= 0) {
      this.currentCount = this.MAX_SECOND;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.currentCount} seconds`;
  }

  reset() {
    this.clearTimer();
    this.currentCount = this.MAX_SECOND;
    this.message = `Click start button to start the Countdown`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.currentCount -= 1;
      if (this.currentCount === 0) {
        this.message = 'TIME OFF!';
        this.clearTimer();
        this.countOnChange.emit(this.currentCount);
      } else {
        this.message = `T-${this.currentCount} seconds and counting`;
      }
    }, 1000);
  }
}
