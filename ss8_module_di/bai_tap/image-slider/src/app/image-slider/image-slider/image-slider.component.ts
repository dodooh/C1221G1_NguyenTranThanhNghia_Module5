import {
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { ImageSlideComponent } from './image-slide/image-slide.component';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  activeIndex = 0;
  srcImage: string 
  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4',
  ];
  constructor() {
    this.srcImage  = this.listImage[0];
  }

  ngOnInit() {}

  ngAfterContentInit() {
  }

  previous() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.listImage.length - 1;
    }
    this.srcImage = this.listImage[this.activeIndex];
  }
  next() {
    if (this.activeIndex < this.listImage.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
    this.srcImage = this.listImage[this.activeIndex];
  }
}
