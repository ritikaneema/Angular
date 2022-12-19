import { Component } from '@angular/core';

@Component({
  selector: 'app-db-component',
  templateUrl: './db-component.component.html',
  styleUrls: ['./db-component.component.css']
})
export class DbComponentComponent {
  name:string= "";
  resetName()
  {
    this.name="";
  }

}
