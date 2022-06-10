import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt5-main',
  templateUrl: './bt5-main.component.html',
  styleUrls: ['./bt5-main.component.css']
})
export class Bt5MainComponent implements OnInit {
  count: number;
  currentRating: number;

  constructor() { }

  ngOnInit() {
  }

  updateRating($event: number) {
    this.currentRating = $event;
  }

  updateCount($event: number) {
    this.count = $event;
  }
}
