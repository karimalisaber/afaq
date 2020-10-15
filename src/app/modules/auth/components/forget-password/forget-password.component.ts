import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private api : ApiCallService) { }

  ngOnInit(): void {
  }

  forgetPassword(phone){
    console.log(phone);
    
    
  }
}
