import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required]),
        country: new FormControl(null, [Validators.required]),
        age: new FormControl('', [Validators.required, Validators.min(18)]),
        gender: new FormControl('', [Validators.required]),
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\+84\d{9,10}$/),
        ]),
      },
      [this.checkPassword]
    );
  }

  checkPassword(formObj: AbstractControl): ValidationErrors | null {
    let pass = formObj.get('password').value;
    let confirmPass = formObj.get('confirmPassword').value;
    return pass === confirmPass || confirmPass == '' ? null : { notSame: true };
  }
  ngOnInit() {}
  onSubmit() {
    if (this.registerForm.valid) {
      alert('Create successsfully \n' + this.registerForm.value);
    }
  }
}
