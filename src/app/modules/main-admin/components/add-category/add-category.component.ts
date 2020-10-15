import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';
import { AssetsService } from './../../../shared/services/assets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
isLoading = true;

catId; // for update
type:string = 'add';  

lang = '0';
imgName = 'chosse image';
category: FormData = new FormData(); // for post new slider
catData:{name?, img?,lang? } = {}; // for update
errorStatus = false;
title = 'Add New Category';
imageFile: any = null; // for uploaded image

@ViewChild('userForm') userForm;

  constructor(private api: ApiCallService, private assets: AssetsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getType(); // update or delete
    this.getCatData();
  }

  private getType(){ // update or add
    this.catId = this.route.snapshot.paramMap.get('id');

    if(!this.catId) this.isLoading = false;
  }

  private getCatData(){ // for update
    if(!this.catId) return;
    
    this.api.getSpecificCategory(this.catId)
    .subscribe(res=>{
      this.isLoading = false;

      this.catData = res;
      this.imgName = res.img
      this.title  = 'edit category';
      document.getElementById('title').innerHTML = `edit <span style="color:#727CF5"> ${res.name} </span>  CATEGORY FORM`;

    })
  }


  addCategory(cat){
  
    if(cat.name?.length ===0 || !this.imageFile ){
      this.errorStatus = true;
     return
    }

    this.category.append('lang', this.lang);
    this.category.append('name', cat.name);
    this.category.append('img', this.imageFile);
        
    
    this.api.addCategory(this.category)
      .subscribe(res=>{
        this.userForm.reset();
        this.imgName = 'chosse image';  
        this.errorStatus = false;

        this.assets.addSuccess();
      });
  }

  updateCategory(cat){
    this.category.append('lang', this.lang);
    this.category.append('name', cat.name);

    if(this.imageFile)
      this.category.append('img', this.imageFile);
        
    
    this.api.updateCategory( this.catId ,this.category)
      .subscribe(res=>{
        this.assets.addSuccess()
        .afterDismissed().subscribe(
          res=>{
            this.router.navigateByUrl('admin/categories')
          }
        )
      });
  }

  addOrEditCategory(cat){
    if(!this.catId)
    this.addCategory(cat);

    else 
    this.updateCategory(cat);
  }


  imgUpload(imgValue){
    // for img
      if( imgValue && imgValue.files[0]) {
        this.imgName = imgValue.files[0].name;
        this.imageFile = imgValue.files[0];
      }
  }
}
