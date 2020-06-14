import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutComponent } from './components/about/about.component';
import { ComponentTitleComponent } from './components/component-title/component-title.component';
import { CoursesComponent } from './components/courses/courses.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { SpecificInstructorComponent } from './components/specific-instructor/specific-instructor.component';
import { CartComponent } from './components/cart/cart.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { RouterModule } from '@angular/router';
import { InstructorItemComponent } from './components/instructor-item/instructor-item.component';
import { SpecificCourseComponent } from './components/specific-course/specific-course.component';
import { SpecificCourseDescriptionComponent } from './components/specific-course-description/specific-course-description.component';
import { SpecificCourseContentComponent } from './components/specific-course-content/specific-course-content.component';
import { SpecificCourseReviewsComponent } from './components/specific-course-reviews/specific-course-reviews.component';
import { StarsComponent } from './components/stars/stars.component';
import {MatRadioModule} from '@angular/material/radio';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FAQComponent } from './components/faq/faq.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ContactComponent } from './components/contact/contact.component';
import { WebsiteComponent } from './components/website/website.component';
import { RelatedCourseComponent } from './components/specific-course/related-course/related-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewSpecificCourseComponent } from './components/view-specific-course/view-specific-course.component';
import { NavSmallComponent } from './components/navbar/nav-small/nav-small.component';
import { NavLargeComponent } from './components/navbar/nav-large/nav-large.component';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { BrowserModule } from '@angular/platform-browser';
// import {AngularSocialShare} from 'angular-socialshare/dist'
const CoreComponents = [
  NavbarComponent,
  HomePageComponent,
  AboutComponent, 
  ComponentTitleComponent,
  CoursesComponent, 
  InstructorsComponent, 
  SpecificInstructorComponent, 
  CartComponent, 
  CourseItemComponent, 
  InstructorItemComponent, 
  SpecificCourseComponent, 
  SpecificCourseDescriptionComponent, 
  SpecificCourseContentComponent, 
  SpecificCourseReviewsComponent, 
  StarsComponent, 
  FAQComponent, 
  ContactComponent, 
  WebsiteComponent, 
  RelatedCourseComponent, 
  ViewSpecificCourseComponent, 
  NavSmallComponent, 
  NavLargeComponent,
  // AngularSocialShare
]

@NgModule({
  declarations: [CoreComponents],
  imports: [
  CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    CarouselModule,
    MatExpansionModule,
    SharedModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  exports:[
    CoreComponents
  ]
})
export class CoreModule { }
