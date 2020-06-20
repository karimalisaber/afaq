import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './../../../shared/services/api-call.service';
import { Instructor } from 'src/app/interfaces/instructors';

@Component({
  selector: 'app-view-instructors',
  templateUrl: './view-instructors.component.html',
  styleUrls: ['./view-instructors.component.scss']
})

export class ViewInstructorsComponent implements OnInit {
  displayedColumns: string[] = ['#','photo' ,'name', 'email', 'courses', 'action'];
  instructors: Instructor[];
  isLoading: boolean =false;
  constructor(private api: ApiCallService) { }

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
}
