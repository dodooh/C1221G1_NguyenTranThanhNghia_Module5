import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CustomerUpdateComponent, CustomerCreateComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],

})
export class CustomerModule { }
