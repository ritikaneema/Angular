import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpRequestService } from './http-request.service';
import { EmployeeListService } from './employee-list.service';


@NgModule({
  declarations: [AppComponent, EmployeeComponent, ShowdataComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [HttpRequestService, EmployeeListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
