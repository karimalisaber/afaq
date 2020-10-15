import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/interfaces/editConfig';
import { UserData } from 'src/app/interfaces/instructors';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';
import { AssetsService } from 'src/app/modules/shared/services/assets.service';

@Component({
  selector: 'app-edit-instructor',
  templateUrl: './edit-instructor.component.html',
  styleUrls: ['./edit-instructor.component.scss']
})
export class EditInstructorComponent implements OnInit {

  imgName: string = "Choose file";
  passwordErrorMessage: string;
  confirmPasswordErrorMessage: string;
  passwordValid: boolean = false;

  imageFile: any;

  editorConfig: AngularEditorConfig = editorConfig;
  progressStatus = "25%";
  isLoading: boolean = false;
  emailExists: boolean = false;
  hasError: boolean = false;
  instructor: UserData = {
    id: 10,
    first_name: '' ,
    last_name: '', 
    title: '',
    job: '',
    phone: '',
    email: '',
    image: '',
    lang : '0',
    password: '',
    id_number: '',
    medical_number: '',
    gender: 'male'
  }

  instructorForm= new FormData();

  constructor(private api: ApiCallService, private assets: AssetsService) { }

  ngOnInit(): void {
  }


  addInstructor(instructorForm){
    this.populateInstructorFormData(instructorForm);
    
    this.api.addInstructor(this.instructorForm).subscribe(
      res=>{
        this.assets.addSuccess().afterDismissed().subscribe(re=>{location.reload()})
      },err=>{
        this.assets.addError();
        
      }
    )
  }

  private populateInstructorFormData(instructorForm){
    this.instructorForm.append("first_name", instructorForm.first_name);
    this.instructorForm.append("last_name", instructorForm.last_name);
    this.instructorForm.append("title", instructorForm.title);
    this.instructorForm.append("job", instructorForm.job);
    this.instructorForm.append("id_number", instructorForm.id_number);
    this.instructorForm.append("medical_number", instructorForm.medical_number);
    this.instructorForm.append("phone", instructorForm.phone);
    this.instructorForm.append("gender", instructorForm.gender);
    this.instructorForm.append("email", instructorForm.email);
    this.instructorForm.append("password", instructorForm.password);
    this.instructorForm.append("image", this.imageFile, this.imageFile.name);
    this.instructorForm.append("lang", instructorForm.lang);
    this.instructorForm.append("category_id", '1');
  }







  // for img
  uploadImage = (imgValue) => {
    if(imgValue.files[0]) 
      this.imageFile = imgValue.files[0]
      this.instructor.image = imgValue.files[0].name
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

    if( nextIdNumber > 3 ) return false;

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
    this.progressStatus  =  (100 * (i/3)).toString() + '%';
  }

}
