import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';

@Component({
  selector: 'app-specific-user-chat',
  templateUrl: './specific-user-chat.component.html',
  styleUrls: ['./specific-user-chat.component.scss']
})
export class SpecificUserChatComponent implements OnInit {
  // participantId/:participantName/:room
  sender: {id?, name?} =  {};
  participant: {id?, name?} =  {};
  roomId;
  isLoading;
  chatData;
  constructor(private route: ActivatedRoute, private api : ApiCallService) { }

  ngOnInit(): void {
    this.getParticipants();
    this.getSpecificChat();
  }

  
  private getParticipants(){
    // sender
    this.sender.id   = this.route.parent.snapshot.paramMap.get('userId');
    this.sender.name = this.route.parent.snapshot.paramMap.get('userName');
   
    this.participant.id = this.route.snapshot.paramMap.get('participantId');
    this.participant.name = this.route.snapshot.paramMap.get('participantName');
    this.roomId = this.route.parent.snapshot.paramMap.get('room');

  }

  getSpecificChat(){ 
    this.isLoading = true;
    
    this.api.getSpecificChatRoom(this.roomId)
    .subscribe(res=>{
      this.chatData = res.reverse();      
    },()=>{}
    ,()=>this.isLoading = false
    );
  }
}
