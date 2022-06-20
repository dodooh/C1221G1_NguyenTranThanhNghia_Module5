import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
  serverElements = [
    {
      type: 'server',
      name: 'test-server',
      content: 'Just a test!'
    }
  ];
  @ViewChild('childContent') childContent: ElementRef;
  onServerAdded(serverData: {
    serverName: string,
    serverContent: string
  }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {
    blueprintName: string,
    blueprintContent: string
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

  ngAfterViewInit(): void {
    console.log('View Child #childContent', this.childContent.nativeElement.textContent);
  }

}
