import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-faq-dialog',
  templateUrl: './edit-faq-dialog.component.html',
  styleUrls: ['./edit-faq-dialog.component.scss']
})
export class EditFaqDialogComponent implements OnInit {

    
    constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  
  }

}
