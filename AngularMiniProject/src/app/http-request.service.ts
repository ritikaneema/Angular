import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Model/Employee';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  url: string = 'http://localhost:3000/employees';

  constructor(public http: HttpClient) {}
  public employeeSave(emp: Employee) {
    return this.http.post<Employee>(this.url, emp);
  }
  public getEmployee() {
    return this.http.get(this.url);
  }
  public deleteEmployee(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  public employeeUpdate(emp: Employee) {
    return this.http.put<Employee>(this.url, emp);
  }
}
