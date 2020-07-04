import { Component, OnInit } from '@angular/core';
import { editorConfig } from 'src/app/interfaces/editConfig';
import { AngularEditorConfig } from '@kolkov/angular-editor/lib/config';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';
import { Categories } from './../../../../interfaces/categories';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  editorConfig: AngularEditorConfig = editorConfig;
  progressStatus = "25%";
  categories: Categories ; 
  
  requirementsArrayNumber = 1;
  requirementsArray = [1];
  outcomesArray = [1];
  outcomesArrayNumber = 1;
  chaptersArray = [1];
  chaptersArrayNumber = 1;
  constructor(private api: ApiCallService) {     
    
  }


  ngOnInit(): void {
    this.getAllCategories();
  }

  private getAllCategories(){
    this.api.getAllCategories()
      .subscribe( 
        res=> this.categories = res,
        () => this.categories = null,
        () => {}
      );
  }


  addRequirement(){
    this.requirementsArrayNumber ++;

    this.requirementsArray.push(this.requirementsArrayNumber);
  }

  removeRequirement(i){
    if(this.requirementsArrayNumber <= 1) return;

    this.requirementsArrayNumber --;
    this.requirementsArray.splice(i, 1);
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



  // stepper 
  move(event){
    let id = event.id;
    if(!id) return false; 
    let currentIdNumber = (+id.split('-')[1]);

    this.removeAllActiveClasses(id);
    this.toggleVisability(id);    

    event.classList.add('active'); // add active class     
    this.calcProgressWidth(currentIdNumber);
  }

  
  moveForward(){  
    let itemId :string = document.querySelector('.admin-btn.active').id;
    
    let nextIdNumber = (+itemId.split('-')[1]) +1;
    
    let nextItemId = 'control-' + nextIdNumber

    if( nextIdNumber > 7 ) return false;

    document.querySelector('.admin-btn.active')?.classList.remove('active');
    document.querySelector('#'+ nextItemId)?.classList.add('active');
    
    this.toggleVisability(nextItemId);
    this.calcProgressWidth(nextIdNumber)

  }

  moveBackowrd(){
    let itemId :string = document.querySelector('.admin-btn.active').id;
    
    let prevIdNumber = (+itemId.split('-')[1]) -1;
    
    let prevItemId = 'control-' + prevIdNumber

    if( prevIdNumber < 1 ) return false;

    document.querySelector('.admin-btn.active')?.classList.remove('active');
    document.querySelector('#'+ prevItemId)?.classList.add('active');
    
    this.toggleVisability(prevItemId);
    this.calcProgressWidth(prevIdNumber)
  }

  
  private removeAllActiveClasses(id){
    document.querySelector('.admin-btn.active')?.classList.remove('active');
  }

  private toggleVisability(id){
    document.querySelector('.item.visible')?.classList.add('in-visible'); // invisble the activ one
    
    document.querySelector('.item.visible')?.classList.remove('visible'); // invisble the activ one
    
    document.querySelector('#item-' + id)?.classList.remove('in-visible'); // visble the new active one
    document.querySelector('#item-' + id)?.classList.add('visible'); // visble the new active one
  }
  

  private calcProgressWidth(i){
    this.progressStatus  =  (100 * (i/7)).toString() + '%';
  }
}
