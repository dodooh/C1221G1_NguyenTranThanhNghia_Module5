import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransportListComponent} from './transport/transport-list/transport-list.component';
import {TransportUpdateComponent} from './transport/transport-update/transport-update.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {path: '', component: TransportListComponent},
  {path: 'update/:id', component: TransportUpdateComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
