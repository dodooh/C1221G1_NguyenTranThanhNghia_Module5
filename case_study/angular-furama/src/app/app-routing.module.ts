import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path      : '',
    redirectTo: 'home',
    pathMatch : 'full'
  },
  {
    path        : 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  {
    path        : 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path        : 'facility',
    loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)
  },
  {
    path        : 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
  {
    path        : '**',
    loadChildren: () => import('./not-found/not-found.module').then(module => module.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
