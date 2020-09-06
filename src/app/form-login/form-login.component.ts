import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(){
    console.log(this.formLogin.value);
  }
  // tslint:disable-next-line:typedef
  get email(){
    return this.formLogin.get('email');
  }
  // tslint:disable-next-line:typedef
  get password(){
    return this.formLogin.get('password');
  }
}
