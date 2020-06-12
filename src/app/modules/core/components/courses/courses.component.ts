import { Pages } from './../../../../interfaces/pages';
import { Course } from './../../../../interfaces/courses';
import { ApiCallService } from './../../../shared/services/api-call.service';
import { Category } from './../../../../interfaces/categories';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  categories: Array<Category>;
  courses: Array<Course>;
  categoryId: number = 0;
  pages:Pages = {
    current_page: 1
  };

  constructor(private api: ApiCallService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.setCurrentPage(); // for query params | 1
    this.setCategoryId(); // for query params | 0
    
    this.getAllCategories();
  
    if (!this.categoryId)
      this.getAllCourses();
    else
      this.getCoursesByCategory();
  }

  private getAllCategories(){
    this.api.getAllCategories()
      .subscribe( res=> this.categories = res
      )
  } 

  private getAllCourses(){
    this.api.getAllCourses(this.pages.current_page)
      .subscribe(
        res=> this.courses = res.data
      );
  }


  private getCoursesByCategory(){
    this.api.getCoursesByCategory(this.categoryId)
      .subscribe(
        res=> this.courses = res.data
      )
  }

  private setCategoryId(){
      this.route.queryParamMap
        .subscribe(
          res => this.categoryId =  parseInt(res.get('category_id')) | 0   
      );
  }

  private setCurrentPage() {
    this.route.queryParamMap
      .subscribe(
        res =>  this.pages.current_page = parseInt(res.get('page')) | 1 
      )
  }

  changeCategory(id){ // for filtering
    if(!id) {
      this.router.navigate([]);
      return
    };

    this.router.navigate([], {
      queryParams: {'page': this.pages.current_page, 'category_id': id},
    });

    this.setCategoryId();
    this.getCoursesByCategory();
  }
  
}