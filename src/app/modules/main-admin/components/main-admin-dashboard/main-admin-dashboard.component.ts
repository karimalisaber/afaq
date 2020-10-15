import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-admin-dashboard',
  templateUrl: './main-admin-dashboard.component.html',
  styleUrls: ['./main-admin-dashboard.component.scss']
})
export class MainAdminDashboardComponent implements OnInit {
  navOpened= true;
  constructor(private router : Router) { }

  ngOnInit(): void {

  }

  logOut(){
    localStorage.clear();
    location.reload();
  }

}
