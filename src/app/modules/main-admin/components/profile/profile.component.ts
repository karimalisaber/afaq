import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  imageFile: any = null; // for uploaded image

  imgName= 'choose image';

  constructor() { }

  ngOnInit(): void {
  }

  
  // for img
  uploadImage = (imgValue) => {
    if(imgValue.files[0]) 
      this.imgName = imgValue.files[0].name;
      this.imageFile = imgValue.files[0];
  };
}
