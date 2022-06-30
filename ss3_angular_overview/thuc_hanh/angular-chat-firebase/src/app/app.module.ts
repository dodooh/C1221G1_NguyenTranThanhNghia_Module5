import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ChatroomComponent} from './chatroom/chatroom.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {DatePipe} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {AdminChatroomComponent} from './admin-chatroom/admin-chatroom.component';
import {AdminRoomlistComponent} from './admin-roomlist/admin-roomlist.component';
import { AdminChatroomDefaultComponent } from './admin-chatroom-default/admin-chatroom-default.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatroomComponent,
    AdminChatroomComponent,
    AdminRoomlistComponent,
    AdminChatroomDefaultComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers   : [DatePipe],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
