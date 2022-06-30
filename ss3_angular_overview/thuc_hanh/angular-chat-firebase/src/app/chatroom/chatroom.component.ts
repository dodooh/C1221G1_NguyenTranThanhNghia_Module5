import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import * as firebase from 'firebase';
import {DatePipe} from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
  selector   : 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls  : ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  @ViewChild('chatcontent') chatcontent: ElementRef;
  scrolltop: number = null;

  chatForm: FormGroup;
  user = {};
  roomname = '';
  message = '';
  users = [];
  chats = [];
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              public datepipe: DatePipe) {
    this.user = JSON.parse(localStorage.getItem('user-chat-info'));
    this.roomname = this.route.snapshot.params.uuid;
    //.orderByChild('roomname').equalTo(this.roomname)
    firebase.database().ref('room/' + this.roomname).on('value', resp => {
      this.chats = [];
      this.chats = snapshotToArray(resp);
      setTimeout(() => this.scrolltop = this.chatcontent.nativeElement.scrollHeight, 200);
    });
  }

  ngOnInit(): void {
    this.chatForm = this.formBuilder.group({
      'message': [null, Validators.required]
    });
  }

  onFormSubmit() {
    const chat = this.chatForm.value;
    chat.roomname = this.roomname;
    chat.nickname = this.user['nickname'];
    chat.date = new Date().toDateString();
    chat.type = 'message';
    const newMessage = firebase.database().ref('room/'+ this.roomname).push();
    newMessage.set(chat);
    this.chatForm.reset();
  }

  exitChat() {
    const chat = {roomname: '', nickname: '', message: '', date: '', type: ''};
    chat.roomname = this.roomname;
    chat.nickname = this.user['nickname'];
    chat.date = new Date().toDateString();
    chat.message = `${this.user['nickname']} leave the room`;
    chat.type = 'exit';
    const newMessage = firebase.database().ref('room/'+ this.roomname).push();
    newMessage.set(chat);

    console.log(this.user['nickname'] + ' exiting chat');
    localStorage.removeItem('user-chat-info');
    this.router.navigate(['/']);
  }

}
