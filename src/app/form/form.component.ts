import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(formLogin) {
    console.log(formLogin);
  }

}
