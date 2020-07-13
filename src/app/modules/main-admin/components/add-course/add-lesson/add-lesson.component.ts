import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {
  lessonsArray = [1];
  lessonsArrayNumber = 1;

  
  constructor() { }

  ngOnInit(): void {
  }

  
  addLesson(i){
    this.lessonsArrayNumber ++;
    
    this.lessonsArray.splice(i+1, 0, i+1);
    this.lessonsArray = this.lessonsArray.fill(1).map((x,index)=> {return index+1});
  }

  removeLesson(i) {
    if(this.lessonsArrayNumber <= 1) return;

    this.lessonsArrayNumber --;
    this.lessonsArray.splice(i, 1);
  }

  

}
