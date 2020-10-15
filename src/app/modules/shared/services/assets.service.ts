import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog"
import { DeleteDialogComponent } from './../components/delete-dialog/delete-dialog.component';
import { take, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { SnackbarErrorComponent } from './../components/snackbar-error/snackbar-error.component';


@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  constructor(private dialog: MatDialog, private snack: MatSnackBar) { }

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

  
  addSuccess(){
    return this.snack.openFromComponent(SnackbarComponent, {duration: 2000, panelClass: 'background-none', horizontalPosition: 'right', verticalPosition: 'top'});
  }

  addError(){
    return this.snack.openFromComponent(SnackbarErrorComponent, {duration: 2000, panelClass: 'background-none', horizontalPosition: 'right', verticalPosition: 'top'});

  }
}
