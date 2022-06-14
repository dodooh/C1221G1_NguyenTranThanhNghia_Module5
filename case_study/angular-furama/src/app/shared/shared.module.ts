import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalCustomerDetailComponent} from './modal-customer-detail/modal-customer-detail.component';
import {ModalDeleteComponent} from './modal-delete/modal-delete.component';


@NgModule({
  declarations: [ModalDeleteComponent, ModalCustomerDetailComponent],
  imports     : [
    CommonModule
  ],
  exports     : [
    ModalDeleteComponent, ModalCustomerDetailComponent
  ]
})
export class SharedModule {
}
