import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>()
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('serverContentInput') serverContentInput: ElementRef;


  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: serverNameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    })
  }
}
