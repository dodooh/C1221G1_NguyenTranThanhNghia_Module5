import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalDeleteComponent} from './modal-delete/modal-delete.component';
import {ModalCustomerDetailComponent} from './modal-customer-detail/modal-customer-detail.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    ModalDeleteComponent,
    ModalCustomerDetailComponent,
  ],
  imports     : [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers   : [],
  exports: [
    ModalDeleteComponent,
    ModalCustomerDetailComponent
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
