import { ApiCallService } from './services/api-call.service';
import { FooterComponent } from './../core/components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import {MatDialogModule} from "@angular/material/dialog"
const SharedComponents =[
  FooterComponent,
  DeleteDialogComponent
];
const  MaterialEntryComponents =[
  DeleteDialogComponent
];

const SharedImportes = [
  CommonModule,
  BrowserModule,
  MatExpansionModule,
  BrowserAnimationsModule,
  RouterModule,
  FormsModule,
  MatRadioModule,
  HttpClientModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatSelectModule,
  MatDialogModule
];

@NgModule({
  declarations: [SharedComponents],
  imports: [
    SharedImportes
  ],
  exports:[
    SharedComponents,
    SharedImportes,
    MaterialEntryComponents
  ],
  entryComponents: [
    MaterialEntryComponents
  ],
  providers:[
    ApiCallService
  ]
})
export class SharedModule { }
