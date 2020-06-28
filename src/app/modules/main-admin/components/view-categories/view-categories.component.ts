import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './../../../shared/services/api-call.service';
import { Categories } from './../../../../interfaces/categories';
import { AssetsService } from './../../../shared/services/assets.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent implements OnInit {
categories: Categories;
isLoading = false;
  constructor(private api: ApiCallService, private assets: AssetsService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.isLoading = true;
    this.api.getAllCategories()
      .subscribe(
        res=> {
          this.categories = res
        },
        ()=>{},
        ()=> this.isLoading = false
      );
  }

  deleteAlert(id){
    this.assets.deleteAlert();
  }

}
