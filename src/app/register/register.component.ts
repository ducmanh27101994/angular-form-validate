import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

// tslint:disable-next-line:typedef
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validator: comparePassword}),
      country: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender:  ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    });
  }

  // tslint:disable-next-line:typedef
  clickAdd() {
    console.log(this.addForm.value);
  }

  get email() {
    return this.addForm.get('email');
  }

  get password() {
    return this.addForm.get('password');
  }

  get country() {
    return this.addForm.get('country');
  }

  get age() {
    return this.addForm.get('age');
  }

  get phone() {
    return this.addForm.get('phone');
  }

  get gender(){
    return this.addForm.get('gender');
  }


}
