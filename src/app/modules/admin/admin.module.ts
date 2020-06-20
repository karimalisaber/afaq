import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { SharedModule } from './../shared/shared.module';

export const InstructorAdminComponents = [
  AdminMainComponent, 
  AdminNavbarComponent,
  AdminSidebarComponent
]


@NgModule({
  declarations: [InstructorAdminComponents],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    InstructorAdminComponents
  ]
})
export class InstructorAdminModule { }
