import { Component , OnInit} from '@angular/core';
import { Employee } from './model/Employee';
import { Form2 } from './model/form2';
import { ServiceService } from './service.service';
import {FormGroup,FormBuilder,FormControl,FormArray,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(private fb:FormBuilder,private cs:ServiceService) { }
  emparr:Employee[]=[];
  registeruser!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit(): void 
  {
    this.registeruser=this.fb.group(
      {
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      subcriptions:['',[Validators.required]],
      password:['',[Validators.required]],
      }
    )
  }
  onsubmit()
  {
    if(this.registeruser.valid)
    {
     console.log(this.registeruser.value);
     this.emparr.push(this.registeruser.value);
    }
    console.log(this.emparr)
  }
  // title = 'Assignment5';

  // public emp=new Employee();
  // emparr:Employee[]=[];
  // email?: string;
  // subscription?: string;
  // password?:string;

  projectname?:string;
  mail2?:string;
  projectstatus?:string;
  formarr:Form2[]=[];

  // GetData()
  // {
  //   return this.emparr;
  // }
  // store(){
  //   let emp=new Employee();
  //   emp.mail=this.email;
  //   emp.password=this.password;
  //   emp.subscription=this.subscription;
  //   this.emparr.push(emp);
  // }
  store2()
  {
    let form=new Form2();
    form.mail2=this.mail2;
    form.projectstatus=this.projectstatus;
    form.projectname=this.projectname;
    this.formarr.push(form);
    console.log(this.formarr);
  }


}

