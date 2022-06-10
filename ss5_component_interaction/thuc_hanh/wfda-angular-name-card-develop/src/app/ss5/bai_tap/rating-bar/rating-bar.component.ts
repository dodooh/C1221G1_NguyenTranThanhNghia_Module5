import {Component, OnInit, Input, SimpleChanges, Output, EventEmitter, OnChanges} from '@angular/core';
import {IRatingBar} from "../i-rating-bar";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  max = 10;
  @Input() current = 5;

  @Output()
  rateChange = new EventEmitter<number>();

  ratingArray: Array<IRatingBar> = [];


  constructor() { }


  generateArray(max, ratingValue) {
    // Tao mang co max phan tu, moi phan tu co value va active;
    this.ratingArray = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  ngOnInit() {
    this.generateArray(this.max, this.ratingArray);
  }

  select(index) {
    this.current = index + 1;
    this.ratingArray.forEach((item, idx) => item.active = idx < this.current);
    this.rateChange.emit(this.current);
  }
  enter(index) {
    this.ratingArray.forEach((item, idx) => item.active = idx <= index);
  }
  reset() {
    this.ratingArray.forEach((item, idx) => item.active = idx < this.current);
  }
}
