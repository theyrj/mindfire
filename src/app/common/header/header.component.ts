import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headercomp',
  templateUrl: './headercomp.component.html',
  styleUrls: ['./headercomp.component.scss']
})
export class HeadercompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  headerbuttons = [{"component1":"Home"}, {"component2": "Dashboard"}, {"component3": "About"}, ];


}
