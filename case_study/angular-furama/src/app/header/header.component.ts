import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  @Input() title!: string;

  loadAPI: Promise<any>;
  titlePassing(value) {
    console.log(value);
    this.title = value;
  }

  public loadScript() {
    const body = document.body as HTMLDivElement;

    const scripts = document.getElementsByTagName('script');

    const dynamicScripts = ['../assets/js/sidebar.js'];

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.defer = true;
      node.charset = 'utf-8';
      body.appendChild(node);
    }
  }

  ngOnInit(): void {
  }

}
