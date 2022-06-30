import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ChatroomComponent} from './chatroom/chatroom.component';
import {AdminRoomlistComponent} from './admin-roomlist/admin-roomlist.component';
import {AdminChatroomComponent} from './admin-chatroom/admin-chatroom.component';
import {AdminChatroomDefaultComponent} from './admin-chatroom-default/admin-chatroom-default.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'room/:uuid', component: ChatroomComponent},
  {
    path    : 'admin', component: AdminRoomlistComponent,
    children: [
      {path: 'room/:roomId', component: AdminChatroomComponent},
      {path: 'rooms', component: AdminChatroomDefaultComponent},
    ]

  },
  {
    path      : '',
    redirectTo: '/login',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
