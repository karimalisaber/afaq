import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { SharedModule } from './../shared/shared.module';

export const AdminComponents = [
  AdminMainComponent, 
  AdminNavbarComponent
]


@NgModule({
  declarations: [AdminComponents, AdminSidebarComponent],
  imports: [
  CommonModule,
    SharedModule
  ],
  exports:[
    AdminComponents
  ]
})
export class AdminModule { }
