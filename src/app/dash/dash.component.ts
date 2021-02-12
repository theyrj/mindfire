import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  userName = 'Bob';
  email: string;
  nickName: string;
  password: string;

  public isDisabled=true;
  public num = "" ;
  
  constructor() { }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);}}
  onClick()
  {
    this.isDisabled=false;
     alert("Fields Will be Enabled!!");
     
  }

  ngOnInit(): void {
  };

}