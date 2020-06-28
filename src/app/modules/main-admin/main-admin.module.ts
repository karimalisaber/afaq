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
import { AngularEditorModule } from '@kolkov/angular-editor';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentApplicationComponent } from './components/student-application/student-application.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { SummaryComponent } from './components/view-courses/summary/summary.component';


export const mianAdminComponents = [
  MainAdminDashboardComponent,
  MainAdminSidebarComponent, 
  MainAdminTitleComponent,
  ViewCategoriesComponent,
  AddCategoryComponent, 
  EdiCategoryComponent, 
  ViewInstructorsComponent, 
  EditInstructorComponent, 
  AddInstructorComponent,
]

@NgModule({
  declarations: [mianAdminComponents, StudentListComponent, StudentApplicationComponent, ViewCoursesComponent, AddCourseComponent, EditCourseComponent, SummaryComponent ],
  imports: [
  SharedModule,
  AngularEditorModule,
  // NgxEditorModule
  // FroalaEditorModule.forRoot(), 
  // FroalaViewModule.forRoot()
  ],

  exports:[
    mianAdminComponents
  ]
})

export class MainAdminModule { }
