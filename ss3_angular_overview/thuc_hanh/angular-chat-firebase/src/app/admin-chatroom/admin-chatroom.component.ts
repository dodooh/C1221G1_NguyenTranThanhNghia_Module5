import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as firebase from 'firebase';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../chatroom/chatroom.component';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {DatePipe} from '@angular/common';
import {environment} from '../../environments/environment';

export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];
  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
const userAdminChat = environment.adminChat;

@Component({
  selector   : 'app-admin-chatroom',
  templateUrl: './admin-chatroom.component.html',
  styleUrls  : ['./admin-chatroom.component.css']
})

export class AdminChatroomComponent implements OnInit {


  @ViewChild('chatcontent') chatcontent: ElementRef;
  scrolltop: number = null;

  chatForm: FormGroup;
  roomname = '';
  chats = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              public datepipe: DatePipe) {

    route.url.subscribe((s:UrlSegment[]) => {
      this.roomname = s[s.length - 1].path;
      console.log(this.roomname)
      //.orderByChild('roomname').equalTo(this.roomname)
      firebase.database().ref('room/' + this.roomname).on('value', resp => {
        this.chats = [];
        this.chats = snapshotToArray(resp);
        setTimeout(() => this.scrolltop = this.chatcontent.nativeElement.scrollHeight, 200);
      });
    })

  }

  ngOnInit(): void {
    this.chatForm = this.formBuilder.group({
      'message': [null, Validators.required]
    });
  }

  onFormSubmit() {
    const chat = this.chatForm.value;
    chat.roomname = this.roomname;
    chat.nickname = userAdminChat.nickname;
    chat.date = new Date().toDateString()
    chat.type = 'message';
    const newMessage = firebase.database().ref('room/' + this.roomname).push();
    newMessage.set(chat);
    this.chatForm.reset();
  }

}
