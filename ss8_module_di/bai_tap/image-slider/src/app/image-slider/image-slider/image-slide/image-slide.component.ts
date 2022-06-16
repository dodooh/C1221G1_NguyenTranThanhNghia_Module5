import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css'],
})
export class ImageSlideComponent implements OnInit {
  @Input() src: string;
  @ViewChild('tmpl') template: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}
}
