import { AngularEditorConfig } from '@kolkov/angular-editor';

export const editorConfig: AngularEditorConfig = {
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
