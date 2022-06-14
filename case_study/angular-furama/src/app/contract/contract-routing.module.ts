import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ContractListComponent} from './contract-list/contract-list.component';


const routes: Routes = [
  {path: 'create', component: ContractCreateComponent},
  {path: '', component: ContractListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule {
}
