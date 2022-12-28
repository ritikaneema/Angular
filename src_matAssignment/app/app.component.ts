import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmaterial';
  loginForm= new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(32),Validators.minLength(6)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    dateofbirth:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    status:new FormControl('Angular Basic',Validators.required)
  })
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  skills:string[]=["Angular Basic","Angular Intermediate","Angular Advanced"];
  MOBILE_PATTERN = /[0-9\+\-\ ]/;

  submit(){
    console.log(this.loginForm.value)
  }
  emailForm:any;
  ngOnInit() {


    this.emailForm = new FormGroup({
      PhoneNumber:new FormControl('',[Validators.pattern(/^[6-9]\d{9}$/)]),
    });
}
}
