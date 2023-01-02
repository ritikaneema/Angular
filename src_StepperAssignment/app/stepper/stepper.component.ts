import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      emailid: ['', Validators.required],
      fname: ['', Validators.required],
      mname: ['', Validators.required],
      
    });
    this.secondFormGroup = this._formBuilder.group({
      account: ['', Validators.required],
      ifsc: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
  }
}
