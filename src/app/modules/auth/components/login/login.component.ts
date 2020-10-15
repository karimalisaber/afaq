import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiCallService } from './../../../shared/services/api-call.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginError=false;
  errorMessage:string ="";
  validInput: boolean = true;
  isLoading: boolean = false;
  passwordVisibile;
  @ViewChild('userForm') userForm: FormGroup;
  
  constructor(private api : ApiCallService, private router: Router) { }

  ngOnInit(): void {
  }

  login(credientials){
    this.loginError = false;
    this.validInput = true;

    if (this.userForm.invalid){
      this.validInput = false;
      return;
    }
    
    this.isLoading = true;

    this.api.login(credientials)
      .subscribe(
        (res:any)=> {
          localStorage.setItem('user', JSON.stringify(res.data));
          localStorage.setItem('token', res.data.token);
        
          this.isLoading = false;
        },

        error=>{
          this.loginError = true;
          this.isLoading = false;
          if (error.status === 401 && this.userForm.valid) this.errorMessage = "email and password didn't match";

        }
      )
  }

  togglePasswordVisibility(){
    this.passwordVisibile =! this.passwordVisibile;
    // this.password.type = "text" ;
    let passwordItem = <HTMLInputElement>document.getElementById("password");

    if (passwordItem.type === "text") passwordItem.type = "password";
    else passwordItem.type = "text"
  }
  
}
