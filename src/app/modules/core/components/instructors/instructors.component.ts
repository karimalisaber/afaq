import { Instructor } from './../../../../interfaces/instructors';
import { ApiCallService } from './../../../shared/services/api-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {
  instructros: Array<Instructor>;
  constructor(private api: ApiCallService) { }

  ngOnInit(): void {
    this.getAllInstructors();
  }

  private getAllInstructors(){
    this.api.getAllInstructors()
      .subscribe(
        res => this.instructros = res
        // res => console.log(res)
        
      );
  }

}
