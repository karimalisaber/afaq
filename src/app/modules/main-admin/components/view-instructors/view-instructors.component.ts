import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './../../../shared/services/api-call.service';
import { Instructor } from 'src/app/interfaces/instructors';
import { AssetsService } from './../../../shared/services/assets.service';

@Component({
  selector: 'app-view-instructors',
  templateUrl: './view-instructors.component.html',
  styleUrls: ['./view-instructors.component.scss']
})

export class ViewInstructorsComponent implements OnInit {
  displayedColumns: string[] = ['photo' , '#','name', 'email', 'phone' ,'courses', 'action'];
  instructors: Instructor[];
  isLoading: boolean =false;
  constructor(private api: ApiCallService, private assets : AssetsService) { }

  ngOnInit(): void {
    this.getAllInstructors();
  }
  

  getAllInstructors(){
    this.isLoading = true;
      this.api.getAllInstructors()
        .subscribe(
          res =>{this.instructors = res},
          ()=>{},
          ()=> this.isLoading= false
        );
  }
  

  
  deleteAlert(id){
    this.assets.deleteAlert().subscribe(res=> res? this.deleteInstructor(id): false );;
  }

  deleteInstructor(id){
    this.api.deleteInstructor(id).subscribe(
      res=>{
        this.assets.addSuccess().afterDismissed().subscribe(res=>{
          location.reload();
        })
      },
      err=>{
        this.assets.addError();
        
      }
    )
  }

}
