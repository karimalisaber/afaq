import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';


const editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '300px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter your Biography here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    // toolbarHiddenButtons: [
    //   [
    //     'undo',
    //     'redo',
    //     'bold',
    //     'italic',
    //     'underline',
    //     'strikeThrough',
    //     'subscript',
    //     'superscript',
    //     'justifyLeft',
    //     'justifyCenter',
    //     'justifyRight',
    //     'justifyFull',
    //     'indent',
    //     'outdent',
    //     'insertUnorderedList',
    //     'insertOrderedList',
    //     'heading',
    //     'fontName'
    //   ],
    //   [
    //     'fontSize',
    //     'textColor',
    //     'backgroundColor',
    //     'customClasses',
    //     'link',
    //     'unlink',
    //     'insertImage',
    //     'insertVideo',
    //     'insertHorizontalRule',
    //     'removeFormat',
    //     'toggleEditorMode'
    //   ]
    // ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: 'v1/image',
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    // ['bold', 'italic'],
    [
      'customClasses',
      'insertImage',
      'insertVideo',
      'toggleEditorMode'
    ]
  ]
};

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.scss']
})



export class AddInstructorComponent implements OnInit {
  editorConfig: AngularEditorConfig = editorConfig;
  progressStatus = "25%";

  constructor() { }

  ngOnInit(): void {
  }

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
