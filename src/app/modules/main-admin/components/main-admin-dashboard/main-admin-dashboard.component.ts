import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-admin-dashboard',
  templateUrl: './main-admin-dashboard.component.html',
  styleUrls: ['./main-admin-dashboard.component.scss']
})
export class MainAdminDashboardComponent implements OnInit {
  navOpened= true;
  constructor() { }

  ngOnInit(): void {
  }

}
