import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  public isDisabled=true;
  public num="";
  
  constructor() { }

  onClick()
  {
    this.isDisabled=false;
     alert("Fields Will be Enabled!!");
     
  }

  ngOnInit(): void {
  }

}