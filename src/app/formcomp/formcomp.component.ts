import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.scss']
})
export class FormcompComponent implements OnInit {
  public Disabled=true;
  public y="yash raj"
  public btnText="Sign UP";
public changedtext="Form Submitted";

  constructor() { 

  }
  onClick(){
    alert("form cancelled");
    this.Disabled=false;
  }
  city = [{"city":"Noida"}, {"city": "gurgaon"}, {"city": "delhi"}];
  ngOnInit(): void {
  }
  signup:any={};

  // head_rit =[{'title1':'Sign Up','title2':'LogIn'}]
  // isDisplay=false;
  // toggleDisplay()
  // {
  //   this.isDisplay=!this.isDisplay;
  // }

  // btnText="signup"

changeText(){  
this.btnText=this.changedtext;
}
onSubmit(){
  alert(JSON.stringify(this.signup));
}


}
