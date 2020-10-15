import { Component, OnInit } from '@angular/core';
import { Pages } from 'src/app/interfaces/pages';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit {
  isLoading: boolean = false;
  displayedColumns: string[] = ['id_number', 'name', 'jobAndTitle' ,'contacts' , 'courses', 'action'];
  students;
  
  pages:Pages = {
    current_page: 1,
    last_page: 1
  };

  constructor(private api: ApiCallService) { 
  }
  
  ngOnInit(): void {
    this.getStudents()

  }
  
  private getStudents(){
    this.isLoading = true;
  
      this.api.getAllStudents(this.pages.current_page)
        .subscribe( (res:any)=>{
          this.students = res.data;
          this.pages.current_page = res.current_page;
          this.pages.last_page = res.last_page;
        }
        ,()=>{}
        ,()=> this.isLoading = false
        )
    }


    
  prev(){
    if(this.pages.current_page <= 1) return
    this.pages.current_page--;
    this.getStudents();
    
  }

  next(){
    if(this.pages.current_page >= this.pages.last_page) return
    
    this.pages.current_page++;
    this.getStudents();
    
  }
 

}
