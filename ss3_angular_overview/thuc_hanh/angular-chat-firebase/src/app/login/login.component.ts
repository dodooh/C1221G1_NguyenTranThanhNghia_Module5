import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  nickname = '';
  ref = firebase.database().ref('users/');
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (localStorage.getItem('user-chat-info')) {
      const uuid = JSON.parse(localStorage.getItem('user-chat-info')).uuid;
      this.router.navigate(['/room', uuid]);
    }
    this.loginForm = this.formBuilder.group({
      'nickname' : [null, Validators.required]
    });
  }

  onFormSubmit(form: any) {
    const login = form;
    login.uuid = uuidv4();
    this.ref.orderByChild('uuid').equalTo(login.uuid).once('value', snapshot => {
      const newUser = firebase.database().ref('users/').push();
      newUser.set(login);
      localStorage.setItem('user-chat-info', JSON.stringify(login));
      this.router.navigate(['/room', login.uuid]);
    });
  }

}
