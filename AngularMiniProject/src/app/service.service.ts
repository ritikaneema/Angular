import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:58392/"
  EmployeeSave(emp:Employee)
  {
    return this.http.post<Employee>(this.url+"/save",emp);
  }
}
