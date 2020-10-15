import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/interfaces/instructors';
import { ApiCallService } from './../../../shared/services/api-call.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-chats',
  templateUrl: './user-chats.component.html',
  styleUrls: ['./user-chats.component.scss']
})
export class UserChatsComponent implements OnInit {
  students;
  filteredstudents;
  isLoading: boolean = false;
  user = {id: '', name: ''};

  constructor(private api: ApiCallService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getChatParticipants();
  }

  private getCurrentUser(){
    this.user.id   = this.route.snapshot.paramMap.get('userId');
    this.user.name = this.route.snapshot.paramMap.get('userName');
  }

  private getChatParticipants(){
    this.isLoading = true;

    this.api.getChatParticipants(this.user.id)
      .subscribe(res=>{
        this.students = res.map(res=> {
                   
        return res.user2_data.id != this.user.id? res.user2_data : res.user1_data;
        });

        let roomsIds = res.map(res=> res.id)

        this.students.forEach((element, i) => {
            element['chatRoomId'] = roomsIds[i];
      });

      this.filteredstudents = this.students;
    },
    ()=>{}
      ,()=> this.isLoading = false
      );
  }

  search(value){
    this.filteredstudents = value? this.students.filter(res=> res.first_name.toLowerCase().includes(value.trim().toLowerCase())) : this.students;   
  }
}
