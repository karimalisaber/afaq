import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-calender',
  templateUrl: './dash-calender.component.html',
  styleUrls: ['./dash-calender.component.scss']
})
export class DashCalenderComponent implements OnInit {
  date =  Date.now();

  // todayString : string = new Date().toDateString();

  constructor() { }

  ngOnInit(): void {}

}
