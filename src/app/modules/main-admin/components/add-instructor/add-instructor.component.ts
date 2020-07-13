import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/interfaces/editConfig';
import { Instructor } from 'src/app/interfaces/instructors';
import { UserData } from './../../../../interfaces/instructors';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.scss']
})



export class AddInstructorComponent implements OnInit {
  imgName: string = "Choose file";
  passwordErrorMessage: string;
  confirmPasswordErrorMessage: string;
  passwordValid: boolean = false;

  editorConfig: AngularEditorConfig = editorConfig;
  progressStatus = "25%";
  isLoading: boolean = false;
  emailExists: boolean = false;
  hasError: boolean = false;
  instructor: UserData = {
    id: 10,
    first_name: 'fdsaf' ,
    last_name: 'ahmed', 
    title: 'prof',
    job: 'prof',
    phone: '01421357464',
    email: 'kairm@gmail.com',
    biography: 'tesssssssssssssst',
    img: '',
    facebook: 'kokoiuew',
    twitter: 'kjsoadfoij',
    linkedin: 'koiko8i',
 
  }
  constructor() { }

  ngOnInit(): void {
  }


  addInstructor(instructorForm){

    console.log(instructorForm);
  }








  // for img
  uploadImage = (imgValue) => {
    if(imgValue.files[0]) 
      this.instructor.img = imgValue.files[0].name
    
  };

  // for password
  passwordError(pass: string) : boolean {
    this.passwordErrorMessage = "password must have at least";
    this.passwordErrorMessage += pass?.length > 10? "" : "10 letters" ;  
    this.passwordErrorMessage += pass?.match('.*\\d.*')? "" :", 1 decimal number";
    this.passwordErrorMessage += pass?.match('.*[a-z].*')? "" :", 1 lower case letter";
    this.passwordErrorMessage += pass?.match('.*[A-Z].*')? "" :", 1 upper case letter";
    this.passwordErrorMessage += pass?.match(".*[!@#$%^&*(),.?\":{}|<>].*")? "" : ", 1 spacial letter [ !@#$%^&*(),.?\":{}|<> ] "; 

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
    
   if (this.confirmPasswordErrorMessage !== "password must have at least")
    return true;

    else return false
}
  

  // for view
  move(event){
    let id = event.id;
    if(!id) return false; 
    let currentIdNumber = (+id.split('-')[1]);

    this.removeAllActiveClasses(id);
    this.toggleVisability(id);    

    event.classList.add('active'); // add active class     
    this.calcProgressWidth(currentIdNumber);
  }

  
  moveForward(){  
    let itemId :string = document.querySelector('.admin-btn.active').id;
    
    let nextIdNumber = (+itemId.split('-')[1]) +1;
    
    let nextItemId = 'control-' + nextIdNumber

    if( nextIdNumber > 4 ) return false;

    document.querySelector('.admin-btn.active')?.classList.remove('active');
    document.querySelector('#'+ nextItemId)?.classList.add('active');
    
    this.toggleVisability(nextItemId);
    this.calcProgressWidth(nextIdNumber)

  }

  moveBackowrd(){
    let itemId :string = document.querySelector('.admin-btn.active').id;
    
    let prevIdNumber = (+itemId.split('-')[1]) -1;
    
    let prevItemId = 'control-' + prevIdNumber

    if( prevIdNumber < 1 ) return false;

    document.querySelector('.admin-btn.active')?.classList.remove('active');
    document.querySelector('#'+ prevItemId)?.classList.add('active');
    
    this.toggleVisability(prevItemId);
    this.calcProgressWidth(prevIdNumber)
  }

  
  private removeAllActiveClasses(id){
    document.querySelector('.admin-btn.active')?.classList.remove('active');
  }

  private toggleVisability(id){
    document.querySelector('.item.visible')?.classList.add('in-visible'); // invisble the activ one
    
    document.querySelector('.item.visible')?.classList.remove('visible'); // invisble the activ one
    
    document.querySelector('#item-' + id)?.classList.remove('in-visible'); // visble the new active one
    document.querySelector('#item-' + id)?.classList.add('visible'); // visble the new active one
  }
  

  private calcProgressWidth(i){
    this.progressStatus  =  (100 * (i/4)).toString() + '%';
  }
}
