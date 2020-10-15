import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';
import { Course, Courses } from 'src/app/interfaces/courses';

@Component({
  selector: 'app-specific-course',
  templateUrl: './specific-course.component.html',
  styleUrls: ['./specific-course.component.scss']
})
export class SpecificCourseComponent implements OnInit  {

  courseId = this.route.snapshot.paramMap.get('id')
  course: Course;
  catId;
  relatedCourses;
  
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
          this.course.rate = Array(Math.round(this.course.rate)).fill('').map((res, i)=> res = i+1);
         console.log(res);
         
          setTimeout(() => { // until view init
            document.getElementById('course-details').innerHTML = this.course.description;
            
          }, 100);
          
        }
      ,
      ()=>{},
      ()=>{
        this.getRelatedCourses();
      });
  }

  addToCart(){
  
    this.api.addToCart({course_id: this.courseId, price: this.course.price})
    .subscribe(res=>{
      this.course.is_purchased = 1;      
    });
  }


  getRelatedCourses(){
    this.api.getRelatedCourses(this.courseId)
      .subscribe(
        (res) => {
          this.relatedCourses = res.splice(0,3); 
        }
      )
  }
  
}
