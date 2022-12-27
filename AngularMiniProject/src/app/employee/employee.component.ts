import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
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
  editClicked = false;
  constructor(
    private fb: FormBuilder,
    private requestService: HttpRequestService,
    private employeeListService: EmployeeListService
  ) {
    requestService.OnClick.subscribe((data: Employee) => {
      this.editClicked = true;
      this.employeeform = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        mobile: new FormControl(data.mobile),
        address: new FormControl(data.address),
      });
    });
  }

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

    if (this.editClicked) {
      this.requestService
        .employeeUpdate(this.employeeform.value, this.employeeform.value.id)
        .subscribe({
          next: (employee) => {
            thisObj.requestService.getEmployee().subscribe({
              next: (value1: any) => {
                thisObj.employeeListService.updateEmployee(value1);
              },
            });
            console.log(employee);
          },
        });
    } else {
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
}
