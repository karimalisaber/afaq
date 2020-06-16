import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/categories';
import { Course } from 'src/app/interfaces/courses';
import { Pages } from 'src/app/interfaces/pages';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  isloading: boolean = false;
  activeCatName: string = "";
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
    this.isloading = true;
    this.api.getAllCategories()
      .subscribe( 
        res=> this.categories = res,
        () => {},
        () => this.isloading = false
      )
  } 

  private getAllCourses(){
    this.activeCatName = 'All'; 
    this.isloading = true;
    this.api.getAllCourses(this.pages.current_page)
      .subscribe(
        res=> this.courses = res.data,
        () => {},
        () => this.isloading = false
      );
  }


  private getCoursesByCategory(){
    this.isloading = true;
    this.api.getCoursesByCategory(this.categoryId)
      .subscribe(
        res=> {
          this.courses = res.data;
        },
        () => {},
        () => this.isloading = false
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

  changeCategory(cat){ // for filtering
    this.categoryId = cat.id;
    this.activeCatName = cat.name ;

    if(!cat.id) {
      this.router.navigate([]);
      this.getAllCourses();
      return
    };
    
    this.router.navigate([], {
      queryParams: {'page': this.pages.current_page, 'category_id': cat.id},
    });
   
    this.getCoursesByCategory();
    this.setCategoryId();
  }
  
}