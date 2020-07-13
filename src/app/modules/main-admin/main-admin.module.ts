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
import { AddLessonComponent } from './components/add-course/add-lesson/add-lesson.component';
import { EditFaqComponent } from './components/edit-faq/edit-faq.component';
import { AddFaqComponent } from './components/add-faq/add-faq.component';
import { EditFaqDialogComponent } from './components/edit-faq/edit-faq-dialog/edit-faq-dialog.component';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { EditContactInfoComponent } from './components/edit-contact-info/edit-contact-info.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserChatsComponent } from './components/user-chats/user-chats.component';
import { AllChatsComponent } from './components/all-chats/all-chats.component';
import { SpecificUserChatComponent } from './components/specific-user-chat/specific-user-chat.component';


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
  EditCourseComponent, 
  SummaryComponent, 
  AddLessonComponent, 
  EditFaqComponent, 
  AddFaqComponent, 
  EditFaqDialogComponent, 
  EditAboutComponent
]

@NgModule({
  declarations: [mianAdminComponents, StudentListComponent, StudentApplicationComponent, ViewCoursesComponent, AddCourseComponent, EditContactInfoComponent, ChatComponent, UserChatsComponent, AllChatsComponent, SpecificUserChatComponent,  ],
  imports: [
  SharedModule,
  AngularEditorModule,
  // NgxEditorModule
  // FroalaEditorModule.forRoot(), 
  // FroalaViewModule.forRoot()
  ],
  entryComponents:[
    EditFaqDialogComponent
  ],
  exports:[
    mianAdminComponents
  ]
})

export class MainAdminModule { }
