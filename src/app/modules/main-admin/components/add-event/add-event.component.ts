import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/interfaces/editConfig';
import { Instructor } from 'src/app/interfaces/instructors';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';
import { AssetsService } from 'src/app/modules/shared/services/assets.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  lang= '0';
  
  editorConfig: AngularEditorConfig = editorConfig;
  categories ; 
  filteredCategories ; 
  instructros: Array<Instructor>;
  filteredInstructros: Array<Instructor>;
  imageFile: any = null; // for uploaded image
  videoFile: any = null; // for uploaded image
  courseId;
  eventForm: FormData = new FormData();;
  
  imgName ;
  videoName ;

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



  // for img
  uploadImage = (imgValue) => {
    if(imgValue.files[0]) 
      this.imgName = imgValue.files[0].name;
      this.imageFile = imgValue.files[0];
  };

  uploadvideo(video){
    if(video.files[0]) {
    this.videoName = video.files[0].name;
    this.videoFile = video.files[0];
    }
  }

  private populateEventForm(data){
    this.eventForm.append("title", data.title);  // 
    this.eventForm.append("details", data.details); // 
    this.eventForm.append("price", data.price);
    this.eventForm.append("discount", data.discount);
    this.eventForm.append("category_id", data.category_id); 
    this.eventForm.append("instractuer_id", data.instractuer_id);
    this.eventForm.append("description", data.description);
    this.eventForm.append("level", data.level);
    this.eventForm.append("time", data.time);
    this.eventForm.append("start_date", data.start_date);
    this.eventForm.append("end_date", data.end_date);
    this.eventForm.append("lang", data.lang);
    this.eventForm.append("event_url", this.videoFile);
    
    this.eventForm.append('main_image', this.imageFile);
  }


  addEvent(event){
    this.populateEventForm(event);
  
    
    this.api.addEvent(this.eventForm)
    .subscribe(
      res=>{
        this.assets.addSuccess().afterDismissed().subscribe(
          ()=> location.reload()
        );
      },
      err=>{
        this.assets.addError();
        console.log(err);
        
      }
    )
    
  }

  

}
