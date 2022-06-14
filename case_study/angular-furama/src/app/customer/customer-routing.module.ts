import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerListComponent} from './customer-list/customer-list.component';


const routes: Routes = [
  {path: '', component: CustomerListComponent},
  {path: 'update/:customerId', component: CustomerUpdateComponent},
  {path: 'create', component: CustomerCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
