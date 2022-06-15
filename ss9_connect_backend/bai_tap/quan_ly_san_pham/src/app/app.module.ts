import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductUpdateComponent} from './product/product-update/product-update.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import {NgxPaginationModule} from "ngx-pagination";
const routes: Routes = [
    {
        path     : '',
        redirectTo: 'product/list',
        pathMatch: 'full'
    },
    {
        path     : 'product/list',
        component: ProductListComponent,
    },
    {
        path     : 'product/create',
        component: ProductCreateComponent,
    },
    {
        path     : 'product/edit/:productId',
        component: ProductUpdateComponent,
    },
    {
        path     : 'category/list',
        component: CategoryListComponent,
    },
    {
        path     : 'category/create',
        component: CategoryCreateComponent,
    },
    {
        path     : 'category/edit/:id',
        component: CategoryEditComponent,
    },
    {
        path     : 'category/delete/:id',
        component: CategoryDeleteComponent,
    }
];

@NgModule({
    imports     : [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [
        AppComponent,
        HelloComponent,
        ProductListComponent,
        ProductCreateComponent,
        ProductUpdateComponent,
        CategoryListComponent,
        CategoryCreateComponent,
        CategoryEditComponent,
        CategoryDeleteComponent,
    ],
    bootstrap   : [AppComponent],
})
export class AppModule {
}
