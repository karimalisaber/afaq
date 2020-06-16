import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiCallService } from './../../../shared/services/api-call.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  jobList;
  passwordErrorMessage: string;
  confirmPasswordErrorMessage: string;
  passwordValid: boolean = false;
  gender = "male";
  emailExists = false;
  isLoading: boolean = false; 

  @ViewChild('userForm') userForm;

  constructor(private api: ApiCallService, private router: Router ) { }

  ngOnInit(): void {
    this.getJobList();
  }

  private getJobList(){
    this.api.getJobList()
    .subscribe(
      res=> this.jobList = res
    )
  }

  signUp(credientials : FormGroup){
    this.emailExists = false;
    // console.log(credientials);
    if (!this.userForm.valid){
      this.makeFormTouched();
      return 
    }

    this.isLoading = true;

    delete credientials['confirm_password']; // we don't need it 

    this.api.register(credientials)
    .subscribe(
      ()=> this.router.navigateByUrl('/') ,
      error=> {
        if (error.status === 401) this.emailExists = true;
        this.isLoading = false;
      });
    document.querySelector('input').blur(); // for clear errors
  }


  private makeFormTouched(){
    for (var key in this.userForm.controls) {
      this.userForm.controls[key].touched = true;
    }
  }

passwordError(pass: string) : boolean {
    this.passwordErrorMessage = "password must have at least";
    this.passwordErrorMessage += pass?.length > 10? "" : "10 letters" ;  
    this.passwordErrorMessage += pass?.match('.*\\d.*')? "" :", 1 decimal number";
    this.passwordErrorMessage += pass?.match('.*[a-z].*')? "" :", 1 lower case letter";
    this.passwordErrorMessage += pass?.match('.*[A-Z].*')? "" :", 1 upper case letter";
    this.passwordErrorMessage += pass?.match(".*[!@#$%^&*(),.?\":{}|<>].*")? "" : ", 1 spacial letter [ !@#$%^&*(),.?\":{}|<> ] "; 

    // console.log(this.passwordErrorMessage);
    
    if (this.passwordErrorMessage !== "password must have at least")
      return true;

      else return false
  }

  isPasswordMatches(pass, confirmPass): boolean{ 
    if (pass !== confirmPass) return false;

    return true
  }

  confirmPasswordError(pass: string) : boolean {
    this.confirmPasswordErrorMessage = "password must have at least";
    this.confirmPasswordErrorMessage += pass?.length > 10? "" : "10 letters" ;  
    this.confirmPasswordErrorMessage += pass?.match('.*\\d.*')? "" :", 1 decimal number";
    this.confirmPasswordErrorMessage += pass?.match('.*[a-z].*')? "" :", 1 lower case letter";
    this.confirmPasswordErrorMessage += pass?.match('.*[A-Z].*')? "" :", 1 upper case letter";
    this.confirmPasswordErrorMessage += pass?.match(".*[!@#$%^&*(),.?\":{}|<>].*")? "" : ", 1 spacial letter [ !@#$%^&*(),.?\":{}|<> ] "; 

    // console.log(this.confirmPasswordErrorMessage);
    
    if (this.confirmPasswordErrorMessage !== "password must have at least")
      return true;

      else return false
  }

 }