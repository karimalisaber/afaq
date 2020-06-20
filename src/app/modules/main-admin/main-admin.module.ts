import { NgModule } from '@angular/core';
import { MainAdminDashboardComponent } from './components/main-admin-dashboard/main-admin-dashboard.component';
import { MainAdminSidebarComponent } from './components/main-admin-sidebar/main-admin-sidebar.component';
import { SharedModule } from './../shared/shared.module';
import { MainAdminTitleComponent } from './components/assets/main-admin-title/main-admin-title.component';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EdiCategoryComponent } from './components/edi-category/edi-category.component';
import { ViewInstructorsComponent } from './components/view-instructors/view-instructors.component';
import { EditInstructorComponent } from './components/edit-instructor/edit-instructor.component';
import { AddInstructorComponent } from './components/add-instructor/add-instructor.component';

export const mianAdminComponents = [
  MainAdminDashboardComponent,
  MainAdminSidebarComponent, 
  MainAdminTitleComponent,
  ViewCategoriesComponent,
  AddCategoryComponent, 
  EdiCategoryComponent, 
  ViewInstructorsComponent, 
  EditInstructorComponent, 
  AddInstructorComponent
]

@NgModule({
  declarations: [mianAdminComponents ],
  imports: [
  SharedModule,
  ],

  exports:[
    mianAdminComponents
  ]
})

export class MainAdminModule { }
