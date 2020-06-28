import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog"
import { DeleteDialogComponent } from './../components/delete-dialog/delete-dialog.component';
import { take, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  constructor(private dialog: MatDialog) { }

  deleteAlert() {
    return  this.dialog.open(DeleteDialogComponent,{
      panelClass: 'confirm-dialog-container',
      position: {top: '20px'}
    })
      .afterClosed().pipe(map(res=>{
        if(res === "yes") return true;

      return false;
    }),take(1));
  }
}
