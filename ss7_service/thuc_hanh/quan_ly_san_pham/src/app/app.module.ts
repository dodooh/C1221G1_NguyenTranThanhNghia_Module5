import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
const routes: Routes = [
  {
    path: 'product/list',
    component: ProductListComponent,
  },
  {
    path: 'product/create',
    component: ProductCreateComponent,
  },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductListComponent,
    ProductCreateComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
