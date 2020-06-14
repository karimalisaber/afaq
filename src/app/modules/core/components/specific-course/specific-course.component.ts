import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';
import { Course, Courses } from 'src/app/interfaces/courses';

@Component({
  selector: 'app-specific-course',
  templateUrl: './specific-course.component.html',
  styleUrls: ['./specific-course.component.scss']
})
export class SpecificCourseComponent implements OnInit {

  courseId = this.route.snapshot.paramMap.get('id')
  course: Course;
  catId;
  relatedCourses: Courses;
  
  constructor(private route: ActivatedRoute, private api: ApiCallService) { }

  ngOnInit(): void {
    this.getCourseDetails();
  }

  getCourseDetails(){
    this.api.getSpecificCourse(this.courseId)
      .subscribe(
        res=>{
          this.course  = res ; 
          this.catId = res.category_id;               
        }
      ,
      ()=>{},
      ()=>{
        this.getRelatedCourses();
      });
      
  }

  getRelatedCourses(){
    this.api.getRelatedCourses(this.catId)
      .subscribe(
        res =>{
          this.relatedCourses = res;          
        }
      )
  }
  
}
