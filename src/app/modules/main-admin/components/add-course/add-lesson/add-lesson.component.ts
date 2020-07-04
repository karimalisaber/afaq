import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {
  outcomesArray = [1];
  outcomesArrayNumber = 1;
  chaptersArray = [1];
  chaptersArrayNumber = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  
  addOutcome(){
    this.outcomesArrayNumber ++;

    this.outcomesArray.push(this.outcomesArrayNumber);
  }

  removeOutcome(i){
    if(this.outcomesArrayNumber <= 1) return;

    this.outcomesArrayNumber --;
    this.outcomesArray.splice(i, 1);
  }

  
  addChapter(){
    this.chaptersArrayNumber ++;

    this.chaptersArray.push(this.chaptersArrayNumber);
  }

  removeChapter(i){
    if(this.chaptersArrayNumber <= 1) return;

    this.chaptersArrayNumber --;
    this.chaptersArray.splice(i, 1);
  }

}
