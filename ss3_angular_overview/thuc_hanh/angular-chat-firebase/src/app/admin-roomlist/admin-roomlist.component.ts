import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as firebase from 'firebase';
import {MyErrorStateMatcher} from '../chatroom/chatroom.component';

export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];
  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
@Component({
  selector: 'app-admin-roomlist',
  templateUrl: './admin-roomlist.component.html',
  styleUrls: ['./admin-roomlist.component.css']
})
export class AdminRoomlistComponent implements OnInit {

  users: any[];
  user_selected: string;

  constructor() {
    firebase.database().ref('users/' ).on('value', resp => {
      this.users = [];
      this.users = snapshotToArray(resp);
    });
  }

  ngOnInit(): void {
  }

  chatWithThisUser(uuid: any) {
    this.user_selected = uuid;
  }
}
