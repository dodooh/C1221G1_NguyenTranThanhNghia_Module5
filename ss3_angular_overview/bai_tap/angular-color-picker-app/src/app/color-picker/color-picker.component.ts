import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  color = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

  colorChange(event: Event) {
    // @ts-ignore
    this.color = event.target.value;
  }
}
