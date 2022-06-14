import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityCreateHouseComponent} from './facility-create/facility-create-house/facility-create-house.component';
import {FacilityCreateRoomComponent} from './facility-create/facility-create-room/facility-create-room.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityCreateVillaComponent} from './facility-create/facility-create-villa/facility-create-villa.component';
import {FacilityUpdateRoomComponent} from './facility-update/facility-update-room/facility-update-room.component';
import {FacilityUpdateHouseComponent} from './facility-update/facility-update-house/facility-update-house.component';
import {FacilityUpdateVillaComponent} from './facility-update/facility-update-villa/facility-update-villa.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';


const routes: Routes = [
  {
    path: 'update', component: FacilityUpdateComponent, children: [
      {path: '1/:facilityId', component: FacilityUpdateVillaComponent},
      {path: '2/:facilityId', component: FacilityUpdateHouseComponent},
      {path: '3/:facilityId', component: FacilityUpdateRoomComponent},
    ]
  },
  {
    path: 'create', component: FacilityCreateComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'villa'},
      {path: 'villa', component: FacilityCreateVillaComponent},
      {path: 'room', component: FacilityCreateRoomComponent},
      {path: 'house', component: FacilityCreateHouseComponent},
    ]
  },
  {path: '', component: FacilityListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}
