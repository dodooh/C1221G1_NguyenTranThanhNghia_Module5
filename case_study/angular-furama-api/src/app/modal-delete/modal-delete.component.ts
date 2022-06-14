import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {
  @Input() messageDelete: string;
  @Input() idDelete: string;
  @Output() confirmDelete = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.confirmDelete.emit(this.idDelete);
  }

}
