import { ApiCallService } from './services/api-call.service';
import { FooterComponent } from './../core/components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const SharedComponents =[
  FooterComponent
]

@NgModule({
  declarations: [SharedComponents],
  imports: [
  CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    SharedComponents
  ],
  providers:[
    ApiCallService
  ]
})
export class SharedModule { }
