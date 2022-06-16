import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {CategoryEditComponent} from "./category-edit/category-edit.component";
import {CategoryDeleteComponent} from "./category-delete/category-delete.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ]
})
export class CategoryModule { }
