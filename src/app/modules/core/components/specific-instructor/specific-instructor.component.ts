import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './../../../shared/services/api-call.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-instructor',
  templateUrl: './specific-instructor.component.html',
  styleUrls: ['./specific-instructor.component.scss']
})
export class SpecificInstructorComponent implements OnInit {
  instructorId = this.route.snapshot.paramMap.get('id');

  instructor;

  constructor(private api : ApiCallService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInstructorDetails();
  }

  private getInstructorDetails(){
    this.api.getSpecificInstructor(this.instructorId)
    .subscribe(
      res=>{
        this.instructor = res;        
      }
    )
  }


}
