import {AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector   : 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls  : ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
  @ContentChild('childContent', {static: true}) childContent: ElementRef;

  constructor() {
  }

  ngAfterContentInit(): void {
    console.log('Content Child #childContent', this.childContent.nativeElement.textContent);
  }

  ngOnInit(): void {
  }

}
