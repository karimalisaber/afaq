
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashNavbarComponent } from './components/dash-navbar/dash-navbar.component';
import { DashMainComponent } from './components/dash-main/dash-main.component';
import { DashHomeComponent } from './components/dash-home/dash-home.component';
import { DashSidebarComponent } from './components/dash-sidebar/dash-sidebar.component';
import { DashCalenderComponent } from './components/dash-calender/dash-calender.component';

import { BarChartComponent } from './copomponents/bar-chart/bar-chart.component';
import { ChartComponent } from './copomponents/chart/chart.component';

const DashboardComponents = [
  DashNavbarComponent, 
  DashMainComponent, 
  DashHomeComponent,
  DashSidebarComponent,
  DashCalenderComponent
];

@NgModule({
  declarations: [DashboardComponents, BarChartComponent, ChartComponent,],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    DashboardComponents
  ]
})
export class DashboardModule { }
