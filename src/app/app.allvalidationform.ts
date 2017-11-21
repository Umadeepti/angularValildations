import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

import { CustomValidators } from '../../src';


@Component({
  selector: 'allvalidation-form',
  templateUrl : './app.allvalidationform.html'
})
export class AllvalidationFormComponent implements OnInit  {
    form: FormGroup;
  num: number = 5;

  ngOnInit() {
    let password = new FormControl('', Validators.required);
    

    this.form = new FormGroup({
      password: password,
         });
  }

  onSubmit(form) {
    console.log(form);
  }

}
