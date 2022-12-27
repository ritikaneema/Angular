import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { Employee } from '../Model/Employee';
import { EmployeeListService } from '../employee-list.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css'],
})
export class ShowdataComponent implements OnInit {
  // empArr: Employee[] = [];
  id?: number;
  constructor(
    private requestService: HttpRequestService,
    public employeeListService: EmployeeListService
  ) {}

  ngOnInit(): void {
    const showdataComponentObj = this;
    this.requestService.getEmployee().subscribe({
      next(value: any) {
        console.log({ value });
        showdataComponentObj.employeeListService.updateEmployee(value);
      },
      error(err) {
        console.log({ err });
      },
    });
  }

  public editEmp(emp: Employee) {
    console.log({ emp });
    this.requestService.Datatranfer(emp);

  }

  public deleteEmp(emp: Employee) {
    if (emp.id) {
      const showdataComponentObj = this;

      this.requestService.deleteEmployee(emp.id).subscribe({
        next(value) {
          showdataComponentObj.requestService.getEmployee().subscribe({
            next(value: any) {
              console.log({ value });
              showdataComponentObj.employeeListService.updateEmployee(value);
            },
            error(err) {
              console.log({ err });
            },
          });
        },
      });
    }
  }
}
