import { Component, OnInit, ViewChild } from '@angular/core';
import { editorConfig } from 'src/app/interfaces/editConfig';
import { AngularEditorConfig } from '@kolkov/angular-editor/lib/config';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';
import { Categories } from './../../../../interfaces/categories';
import { Instructor } from 'src/app/interfaces/instructors';
import { AssetsService } from './../../../shared/services/assets.service';
import { element } from 'protractor';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  lessonsArray = {'0':[1]};
  lessonsArrayNumber = 1;
  chaptersUploadName = 'Upload all Leassons videos ordered alphabetically';
  editorConfig: AngularEditorConfig = editorConfig;
  categories ; 
  filteredCategories ; 
  instructros: Array<Instructor>;
  filteredInstructros: Array<Instructor>;
  imageFile: any = null; // for uploaded image
  lessonsFiles = []; // for uploaded videos
  courseBasics: FormData = new FormData(); // for post new slider
  chapter: FormData = new FormData(); // for post new slider
  courseId;



  @ViewChild('addChapterForm') chapterForm;

  steps = {
    one: {
      inProgress: true,
      finish: false
    },
    two:{
      inProgress: false,
      finish: false
    },
    three: {
      inProgress: false,
      finish: false
    },
    four:{
      inProgress: false,
      finish: false
    }
  }

  submit: Array<boolean> = [false];
  addcourseProgressBar: Array<number> = [0];

  // design
  progressStatus = "25%";
  requirementsArrayNumber = 1;
  requirementsArray = [1];
  chaptersArray = [1];
  courseSubmitSuccess: Array<boolean> = [];
  chaptersArrayNumber = 1;
  imgName ;

  constructor(private api: ApiCallService, private assets: AssetsService) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllInstructors();
  }

  private getAllCategories(){
    this.api.getAllCategories()
      .subscribe( 
        res=> this.filteredCategories = this.categories = res,
        () => this.categories = null,
        () => {}
      );
  }

  filterCategories(value){
    this.filteredCategories = (value)? this.categories.filter(res=> res.name.toLowerCase().includes(value.trim().toLowerCase())): this.categories;    
  }

  
  filterInstructors(value){
    // this.filteredInstructros = (value)? this.instructros.filter(res=> res.name.toLowerCase().includes(value.trim().toLowerCase())): this.categories;    
  }

  
  private getAllInstructors(){
    this.api.getAllInstructors()
      .subscribe(
        res => this.instructros = res
      )
      ,
      ()=>{},
      ()=>{}
  }

  uploadLeasonVideo= (video,i)=>{    
    if(video.files[0]) {

      document.getElementById('lesson-video-label-' +i).textContent = video.files[0].name

      for(let i=0; i<video.files.length; i++ ){
      }
      
    }
  }


  // for img
  uploadImage = (imgValue) => {
    if(imgValue.files[0]) 
      this.imgName = imgValue.files[0].name;
      this.imageFile = imgValue.files[0];

  };

  private firstStepSubmit(course){
    this.courseBasicsSetting(course);  

    if(this.steps.one.inProgress && !this.steps.two.inProgress) {
      this.postCourse();
    }

    else{
      console.log('first step edit ' , course);
    }
  }

  private postCourse(){
    this.api.addCourse(this.courseBasics)
      .subscribe((res:any)=>{
        this.courseId = res.data.id;
        // this.assets.addSuccess();
      }
      ,err=> {
        this.assets.addError();
        this.moveBackowrd();
        this.steps.one.finish = false;
        this.steps.two.inProgress = false;
      }
      )
  }

  get  getAllCoursesStatus(){
    if(this.courseSubmitSuccess.length)
      return this.courseSubmitSuccess.reduce((x ,y )=> x && y)
 
      return false;
  }



  private courseBasicsSetting(data){
    this.courseBasics.append("title", data.title);
    this.courseBasics.append("details", data.details);
    this.courseBasics.append("price", data.price);
    this.courseBasics.append("category_id", data.category_id);
    this.courseBasics.append("instractuer_id", data.instractuer_id);
    this.courseBasics.append("description", data.description);
    this.courseBasics.append("level", data.level);
    this.courseBasics.append("time", data.time);
    this.courseBasics.append("lang", data.lang);
    this.courseBasics.append("discount", data.discount);
    this.courseBasics.append("start_date", data.start_date);
    this.courseBasics.append("end_date", data.end_date);
    this.courseBasics.append("type", 'course');
    this.courseBasics.append('main_image', this.imageFile, this.imageFile.name);
  }

  
  private secondStepSubmit(form){
    let names = Object.values(form)
    
    if(!this.steps.two.finish){
        this.api.addCourseRequirements({names, course_id : this.courseId}).subscribe(
          res=>{
          //  this.assets.addSuccess();
          },
          error=>{
            this.assets.addError();
            
            this.steps.two.finish = false;

            this.steps.three.inProgress = false;
            this.moveBackowrd();
          }
        );
    }
    
    else {
      console.log(names, 'edit');
    }
    
  }

  private setFiles(){
    let items =  document.getElementsByClassName('lesson-video-label');
    for(let i = 0; i< items.length; i++){
        let element : any = items[i]
        let file = element.files[0]  
        this.lessonsFiles.push(file);
    }
    
  }

  postChapter(form ,i){
    this.steps.four.inProgress = false;
    this.steps.three.finish = false;
    this.setFiles();

    this.submit[i]= true;

    this.chapter.append("course_id", this.courseId);
    this.chapter.append("chapter_name", form.chapter_name);
    
    let lesson_name :Array<string> = Object.values(form.lesson_name)    
    
    
    for(let i=0; i< lesson_name.length; i++ ){
      this.chapter.append("lesson_name[]", lesson_name[i]);
    }


    for(let i=0; i<this.lessonsFiles.length; i++ ){
      this.chapter.append('lesson_video[]', this.lessonsFiles[i]);
    }


    this.api.addChapter(this.chapter)
    .subscribe(
      (res:any)=>{
        // this.assets.addSuccess();
        
        if (res.loaded !== res.total)
          this.addcourseProgressBar[i] = (res.loaded/ res.total) * 100;
      
        else if (res.loaded !== res.total)
         this.addcourseProgressBar[i] = 100;

        
        
      },
      err => {
        this.assets.addError();
        console.log(err);
        
      },
      ()=> {
        this.courseSubmitSuccess[i] = true
        this.steps.four.inProgress = true;
        this.steps.three.finish = true;
      }
    );
  }
  

  // for design
  addRequirement(){
    this.requirementsArrayNumber ++;

    this.requirementsArray.push(this.requirementsArrayNumber);
  }

  removeRequirement(i){
    if(this.requirementsArrayNumber <= 1) return;

    this.requirementsArrayNumber --;
    this.requirementsArray.splice(i, 1);
  }

  addChapter(i){
    this.lessonsArray[i+1] = [1];

    this.chaptersArrayNumber ++;
    this.submit[i+1]= false;

    this.chaptersArray.push(this.chaptersArrayNumber);
  }

  removeChapter(i){
    if(this.chaptersArrayNumber <= 1) return;

    this.submit[i] = undefined;

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

  
  moveForward(form, number){
    if(number ===1){
      this.firstStepSubmit(form);
      this.steps.one.finish = true;
      this.steps.two.inProgress = true;
      
    }

    else if(number ===2){
      this.secondStepSubmit(form);

      this.steps.two.finish = true;

      this.steps.three.inProgress = true;
     
    }

    // else if(number ===3){
    //   this.steps.three.finish = true;

    //   this.steps.four.inProgress = true;
    //   this.thirdStepSubmit(form);
    // }

    let itemId :string = document.querySelector('.admin-btn.active').id;
    
    let nextIdNumber = (+itemId.split('-')[1]) +1;
    
    let nextItemId = 'control-' + nextIdNumber
    
    
    if( nextIdNumber > 4 ) return false;

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
    this.progressStatus  =  (100 * (i/4)).toString() + '%';
  }

  
  addLesson(outerIndex,i){
    this.lessonsArrayNumber ++;
    
    console.log(this.lessonsArray);
    
    this.lessonsArray[outerIndex].splice(i+1, 0, i+1);
    this.lessonsArray[outerIndex] = this.lessonsArray[outerIndex].fill(1).map((x,index)=> {return index+1});
  }

  removeLesson(outerIndex,i) {
    if(this.lessonsArrayNumber <= 1) return;

    this.lessonsArrayNumber --;
    this.lessonsArray[outerIndex].splice(i, 1);
  }

}
