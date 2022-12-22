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
  formarr:Form2[]=[];
  registeruser!:FormGroup;
  Projectform!:FormGroup; //for form2
  isDisable:boolean = true;
  isTest:boolean = false;

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

    this.Projectform=this.fb.group({

      projectname:['',[Validators.required]],
      mail2:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      projectstatus:['',[Validators.required]],
      
    })
  }
  onsubmit()
  {
    if(this.registeruser.valid)
    {
     console.log(this.registeruser.value);
     this.emparr.push(this.registeruser.value);
    }
    console.log(this.emparr)

    if(this.Projectform.valid && this.Projectform.value['projectname'] != 'test')
    {
     console.log(this.Projectform.value);
     console.log(this.Projectform.value['projectname']);
     console.log("error");
    }
    else if(this.Projectform.value['projectname'] == 'test'){
      this.isTest = true;
      console.log("test");
    }
    else{
     this.isDisable=false;
     console.log("Empty");
    }
 }
  }

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
//   store2()
//   {
//     let form=new Form2();
//     form.mail2=this.mail2;
//     form.projectstatus=this.projectstatus;
//     form.projectname=this.projectname;
//     this.formarr.push(form);
//     console.log(this.formarr);
//   }


// }

