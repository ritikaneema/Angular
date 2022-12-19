import { Component } from '@angular/core';

@Component({
  selector: 'app-dcomponent',
  templateUrl: './dcomponent.component.html',
  styleUrls: ['./dcomponent.component.css']
})
export class DcomponentComponent {
  name:string="Ritika Neema";
  Display:boolean=false;
  countShow:number[]=[];
  count:number = 0;
  ClickMe(){
    this.count++;
    this.countShow.push(this.count);
  }




}
