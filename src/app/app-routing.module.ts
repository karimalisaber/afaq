import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './modules/core/components/website/website.component';
import { HomePageComponent } from './modules/core/components/home-page/home-page.component';
import { AboutComponent } from './modules/core/components/about/about.component';
import { ContactComponent } from './modules/core/components/contact/contact.component';
import { FAQComponent } from './modules/core/components/faq/faq.component';
import { CoursesComponent } from './modules/core/components/courses/courses.component';
import { InstructorsComponent } from './modules/core/components/instructors/instructors.component';
import { SpecificInstructorComponent } from './modules/core/components/specific-instructor/specific-instructor.component';
import { ViewSpecificCourseComponent } from './modules/core/components/view-specific-course/view-specific-course.component';
import { SpecificCourseComponent } from './modules/core/components/specific-course/specific-course.component';
import { SpecificCourseDescriptionComponent } from './modules/core/components/specific-course-description/specific-course-description.component';
import { SpecificCourseContentComponent } from './modules/core/components/specific-course-content/specific-course-content.component';
import { SpecificCourseReviewsComponent } from './modules/core/components/specific-course-reviews/specific-course-reviews.component';
import { CartComponent } from './modules/core/components/cart/cart.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { ForgetPasswordComponent } from './modules/auth/components/forget-password/forget-password.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { DashMainComponent } from './modules/dashboard/components/dash-main/dash-main.component';
import { MainAdminDashboardComponent } from './modules/main-admin/components/main-admin-dashboard/main-admin-dashboard.component';
import { ViewCategoriesComponent } from './modules/main-admin/components/view-categories/view-categories.component';
import { AddCategoryComponent } from './modules/main-admin/components/add-category/add-category.component';
import { NgModule } from '@angular/core';
import { ViewInstructorsComponent } from './modules/main-admin/components/view-instructors/view-instructors.component';
import { AddInstructorComponent } from './modules/main-admin/components/add-instructor/add-instructor.component';
import { EditInstructorComponent } from './modules/main-admin/components/edit-instructor/edit-instructor.component';
import { StudentListComponent } from './modules/main-admin/components/student-list/student-list.component';
import { StudentApplicationComponent } from './modules/main-admin/components/student-application/student-application.component';
import { ViewCoursesComponent } from './modules/main-admin/components/view-courses/view-courses.component';
import { AddCourseComponent } from './modules/main-admin/components/add-course/add-course.component';
import { EditCourseComponent } from './modules/main-admin/components/edit-course/edit-course.component';


const routes: Routes = [
  {path: '', component: WebsiteComponent, children:[
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact_us', component: ContactComponent},
    {path: 'FAQ', component: FAQComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'instructors', component: InstructorsComponent},
    {path: 'instructor/:id', component: SpecificInstructorComponent},
    {path: 'course/view/:id', component: ViewSpecificCourseComponent},

    {path: 'course/:id', component: SpecificCourseComponent, children:[
        {path: '', component: SpecificCourseDescriptionComponent},
        {path: 'content', component: SpecificCourseContentComponent},
        {path: 'reviews', component: SpecificCourseReviewsComponent},
    ]},
  
    {path: 'cart', component: CartComponent},
    // auth
    {path: 'login', component: LoginComponent},
    {path: 'forget_password', component: ForgetPasswordComponent},
    {path: 'signup', component: SignupComponent},
  ]},


  // dashboard
  {path: 'dashboard', component: DashMainComponent},

  {path: 'admin', component: MainAdminDashboardComponent, children:[
    {path: 'categories', component: ViewCategoriesComponent},
    {path: 'add_category', component: AddCategoryComponent},
    {path: 'edit_category/:id', component: AddCategoryComponent},

    // insturctors 
    {path: 'instructors', component: ViewInstructorsComponent},
    {path: 'add_instructor', component: AddInstructorComponent},
    {path: 'edit_instructor/:id', component: EditInstructorComponent},

    // students 
    {path: 'student_list', component: StudentListComponent},
    {path: 'student_application', component: StudentApplicationComponent},

    // courses
    {path: 'courses', component: ViewCoursesComponent},
    {path: 'add_course', component: AddCourseComponent},
    {path: 'edit_course/:id', component: EditCourseComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
