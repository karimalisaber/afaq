import { Instructor } from './../../../../interfaces/instructors';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instructor-item',
  templateUrl: './instructor-item.component.html',
  styleUrls: ['./instructor-item.component.scss']
})
export class InstructorItemComponent implements OnInit {
  @Input('instructor') instructor: Instructor;
  
  constructor() { }

  ngOnInit(): void {
  }

}
