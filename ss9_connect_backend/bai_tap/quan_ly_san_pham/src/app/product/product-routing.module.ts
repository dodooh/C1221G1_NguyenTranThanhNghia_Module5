import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductUpdateComponent} from "./product-update/product-update.component";


const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent
  }, {
    path: 'create',
    component: ProductCreateComponent
  }, {
    path: 'edit/:productId',
    component: ProductUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
