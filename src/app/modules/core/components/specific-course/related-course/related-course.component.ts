import { Component, OnInit, Input, AfterContentInit, OnChanges } from '@angular/core';
import { Courses } from 'src/app/interfaces/courses';

@Component({
  selector: 'app-related-course',
  templateUrl: './related-course.component.html',
  styleUrls: ['./related-course.component.scss']
})
export class RelatedCourseComponent implements OnInit, AfterContentInit, OnChanges {
@Input('relatedCourses') relatedCourses: Courses;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.relatedCourses);
    
  }

  ngAfterContentInit(){
    // console.log(this.relatedCourses);

  }

  ngOnChanges( changes){
    console.log(this.relatedCourses);
    // console.log('chanate');
    // console.log(changes);
    
  }

}
