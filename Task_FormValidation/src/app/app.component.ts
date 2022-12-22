import { Component , OnInit} from '@angular/core';
import { Employee } from './model/Employee';
import { Form2 } from './model/form2';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment5';
  frm?:Form2

  public emp=new Employee();
  emparr:Employee[]=[];
  email?: string;
  subscription?: string;
  password?:string;

  projectname?:string;
  mail2?:string;
  projectstatus?:string;
  formarr:Form2[]=[];

  GetData()
  {
    return this.emparr;
  }
  store(){
    let emp=new Employee();
    emp.mail=this.email;
    emp.password=this.password;
    emp.subscription=this.subscription;
    this.emparr.push(emp);
  }
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

