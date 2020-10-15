import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';

@Component({
  selector: 'app-specific-course-description',
  templateUrl: './specific-course-description.component.html',
  styleUrls: ['./specific-course-description.component.scss']
})
export class SpecificCourseDescriptionComponent implements OnInit {
  courseId = this.route.snapshot.paramMap.get('id')
  course

  constructor(private route: ActivatedRoute, private api: ApiCallService) { }

  ngOnInit(): void {
    this.getCourseDetails();
  }

  
  getCourseDetails(){
    this.api.getSpecificCourse(this.courseId)
      .subscribe(
        res=>{
          this.course  = res ; 
          
          console.log('coure' , this.course);
          

          setTimeout(() => { // until view init
            document.getElementById('course-desc-item').innerHTML = this.course.description;
            document.getElementById('course-details-item').innerHTML = this.course.details;
            
            console.log(document.getElementById('course-details-item'));
            
          }, 100);
          
        }
      ,
      ()=>{},
      ()=>{});
      
  }

}
