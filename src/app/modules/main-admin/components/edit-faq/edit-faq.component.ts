import { Component, OnInit } from '@angular/core';
import { AssetsService } from './../../../shared/services/assets.service';
import { MatDialog } from '@angular/material/dialog';
import { EditFaqDialogComponent } from './edit-faq-dialog/edit-faq-dialog.component';

@Component({
  selector: 'app-edit-faq',
  templateUrl: './edit-faq.component.html',
  styleUrls: ['./edit-faq.component.scss']
})
export class EditFaqComponent implements OnInit {

  constructor(private assets: AssetsService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  editFAQ(id){
    this.dialog.open(EditFaqDialogComponent, {
      data: id,
      panelClass: 'edit-dialog-container',
      width: '50%'
    }).afterClosed().subscribe(res=>{
      location.reload(); // change it
    });
  }
  
  deleteAlert(id){
    this.assets.deleteAlert();
  }
}
