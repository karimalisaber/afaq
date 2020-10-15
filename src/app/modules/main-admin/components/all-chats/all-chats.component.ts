import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';
import { Pages } from 'src/app/interfaces/pages';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-all-chats',
  templateUrl: './all-chats.component.html',
  styleUrls: ['./all-chats.component.scss']
})
export class AllChatsComponent implements OnInit {
  students;
  isLoading: boolean = false;
  pages:Pages = {
    current_page: 1,
    last_page: 1
  };

  constructor(private api: ApiCallService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.setCurrentPage(); // for query params | 1

    this.getChatUsers();
  }

  
  private setCurrentPage() {
    this.route.queryParamMap
      .subscribe(
        res =>  this.pages.current_page = parseInt(res.get('page')) | 1 
      )
  }

  private getChatUsers(){
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
    this.getChatUsers();
    
  }

  next(){
    if(this.pages.current_page >= this.pages.last_page) return
    
    this.pages.current_page++;
    this.getChatUsers();
    
  }
}
