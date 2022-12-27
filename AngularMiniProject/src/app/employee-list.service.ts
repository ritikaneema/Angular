import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Model/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  emp: Employee[] = [];
  constructor() {}

  public updateEmployee(empList:Employee[]) {
    this.emp = empList;
  }
  
}
