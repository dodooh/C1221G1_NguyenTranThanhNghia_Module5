import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {HomeComponent} from './home/home.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerUpdateComponent} from './customer/customer-update/customer-update.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityUpdateComponent} from './facility/facility-update/facility-update.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalDeleteComponent} from './modal-delete/modal-delete.component';
import {ModalCustomerDetailComponent} from './modal-customer-detail/modal-customer-detail.component';
import {FacilityCreateVillaComponent} from './facility/facility-create/facility-create-villa/facility-create-villa.component';
import {FacilityCreateRoomComponent} from './facility/facility-create/facility-create-room/facility-create-room.component';
import {FacilityCreateHouseComponent} from './facility/facility-create/facility-create-house/facility-create-house.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FacilityUpdateVillaComponent} from './facility/facility-update/facility-update-villa/facility-update-villa.component';
import {FacilityUpdateHouseComponent} from './facility/facility-update/facility-update-house/facility-update-house.component';
import {FacilityUpdateRoomComponent} from './facility/facility-update/facility-update-room/facility-update-room.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer/update/:customerId', component: CustomerUpdateComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer', component: CustomerListComponent},
  {
    path: 'facility/update', component: FacilityUpdateComponent, children: [
      {path: '1/:facilityId', component: FacilityUpdateVillaComponent},
      {path: '2/:facilityId', component: FacilityUpdateHouseComponent},
      {path: '3/:facilityId', component: FacilityUpdateRoomComponent},
    ]
  },
  {
    path: 'facility/create', component: FacilityCreateComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'villa'},
      {path: 'villa', component: FacilityCreateVillaComponent},
      {path: 'room', component: FacilityCreateRoomComponent},
      {path: 'house', component: FacilityCreateHouseComponent},
    ]
  },
  {path: 'facility', component: FacilityListComponent},
  {path: 'contract/create', component: ContractCreateComponent},
  {path: 'contract', component: ContractListComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    FacilityListComponent,
    HomeComponent,
    CustomerListComponent,
    ContractListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    ContractCreateComponent,
    ModalDeleteComponent,
    ModalCustomerDetailComponent,
    FacilityCreateVillaComponent,
    FacilityCreateRoomComponent,
    FacilityCreateHouseComponent,
    NotFoundComponent,
    FacilityUpdateVillaComponent,
    FacilityUpdateHouseComponent,
    FacilityUpdateRoomComponent
  ],
  imports     : [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
