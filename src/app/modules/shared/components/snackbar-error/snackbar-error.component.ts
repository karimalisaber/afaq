import { Component, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-snackbar-error',
  templateUrl: './snackbar-error.component.html',
  styleUrls: ['./snackbar-error.component.scss']
})
export class SnackbarErrorComponent implements OnInit {
  constructor(public snackBarRef: MatSnackBarRef<SnackbarComponent>) { }


  ngOnInit(): void {
  }

}
