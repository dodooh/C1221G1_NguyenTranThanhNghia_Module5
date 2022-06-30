import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAyMrBGwsFyKO3vaKNu_U9LtdJbGiFP2gA',
  databaseURL: 'https://fir-chat-9b119-default-rtdb.asia-southeast1.firebasedatabase.app'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
