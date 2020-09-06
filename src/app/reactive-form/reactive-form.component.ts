import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formContact: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formContact = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      gender: this.fb.group ({
        male: true,
        female: false
      })
    });
  }

  clickSubmit() {
    console.log(this.formContact.value);
  }
  // tslint:disable-next-line:typedef
  get name(){
    return this.formContact.get('name');
  }
  get age(){
    return this.formContact.get('age');
  }
  get phone(){
    return this.formContact.get('phone');
  }
  get address(){
    return this.formContact.get('address');
  }
  get male(){
    return this.formContact.get('male');
  }
  get female(){
    return this.formContact.get('female');
  }

}
