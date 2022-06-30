import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports     : [
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
