import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeListService } from '../employee-list.service';
import { HttpRequestService } from '../http-request.service';
import { Employee } from '../Model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // providers: [HttpRequestService],
})
export class EmployeeComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private requestService: HttpRequestService,
    private employeeListService: EmployeeListService
  ) {}
  employeeform!: FormGroup;
  isDisable: boolean = true;
  isTest: boolean = false;

  namepattern!: '^[a-zA-Z ]{2,20}$';

  ngOnInit(): void {
    this.employeeform = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern(this.namepattern)]],
      mobile: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const thisObj = this;
    this.requestService.employeeSave(this.employeeform.value).subscribe({
      next(response) {
        console.log({ response });
        // const showdataComponentObj = this;
        thisObj.requestService.getEmployee().subscribe({
          next(value: any) {
            console.log({ value });
            thisObj.employeeListService.updateEmployee(value);
          },
          error(err) {
            console.log({ err });
          },
        });
      },
      error(err) {},
    });
  }
}
