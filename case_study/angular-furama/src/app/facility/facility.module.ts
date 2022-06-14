import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {FacilityCreateComponent} from "./facility-create/facility-create.component";
import {FacilityUpdateComponent} from "./facility-update/facility-update.component";
import {FacilityCreateVillaComponent} from "./facility-create/facility-create-villa/facility-create-villa.component";
import {FacilityCreateRoomComponent} from "./facility-create/facility-create-room/facility-create-room.component";
import {FacilityCreateHouseComponent} from "./facility-create/facility-create-house/facility-create-house.component";
import {FacilityUpdateVillaComponent} from "./facility-update/facility-update-villa/facility-update-villa.component";
import {FacilityUpdateHouseComponent} from "./facility-update/facility-update-house/facility-update-house.component";
import {FacilityUpdateRoomComponent} from "./facility-update/facility-update-room/facility-update-room.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../app.module";


@NgModule({
  declarations: [
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    FacilityCreateVillaComponent,
    FacilityCreateRoomComponent,
    FacilityCreateHouseComponent,
    FacilityUpdateVillaComponent,
    FacilityUpdateHouseComponent,
    FacilityUpdateRoomComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FacilityModule { }
