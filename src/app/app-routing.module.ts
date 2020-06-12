import { WebsiteComponent } from './modules/core/components/website/website.component';
import { DashMainComponent } from './modules/dashboard/components/dash-main/dash-main.component';
import { ContactComponent } from './modules/core/components/contact/contact.component';
import { FAQComponent } from './modules/core/components/faq/faq.component';
import { SpecificCourseReviewsComponent } from './modules/core/components/specific-course-reviews/specific-course-reviews.component';
import { SpecificCourseContentComponent } from './modules/core/components/specific-course-content/specific-course-content.component';
import { SpecificCourseDescriptionComponent } from './modules/core/components/specific-course-description/specific-course-description.component';
import { CartComponent } from './modules/core/components/cart/cart.component';
import { SpecificInstructorComponent } from './modules/core/components/specific-instructor/specific-instructor.component';
import { InstructorsComponent } from './modules/core/components/instructors/instructors.component';
import { CoursesComponent } from './modules/core/components/courses/courses.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { ForgetPasswordComponent } from './modules/auth/components/forget-password/forget-password.component';
import { HomePageComponent } from './modules/core/components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AboutComponent } from './modules/core/components/about/about.component';
import { SpecificCourseComponent } from './modules/core/components/specific-course/specific-course.component';
import { AdminMainComponent } from './modules/admin/components/admin-main/admin-main.component';


const routes: Routes = [
  {path: '', component: WebsiteComponent, children:[
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact_us', component: ContactComponent},
    {path: 'FAQ', component: FAQComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'instructors', component: InstructorsComponent},
    {path: 'instructor/:id', component: SpecificInstructorComponent},
    {path: 'course/view/:id', component: SpecificInstructorComponent},

    {path: 'course/:id', component: SpecificCourseComponent, children:[
        {path: 'description', component: SpecificCourseDescriptionComponent},
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

  {path: 'admin', component: AdminMainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
