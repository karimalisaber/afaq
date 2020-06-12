import { Course } from './../../../../interfaces/courses';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { Instructor } from 'src/app/interfaces/instructors';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input('home') home: boolean;
  @Input('course') course: Course;
  
  constructor() { 
    
  }

  ngOnInit(): void {

  }


}
