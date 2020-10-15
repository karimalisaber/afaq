import { Component, OnInit } from '@angular/core';
import { Courses, Course } from './../../../../interfaces/courses';
import { ApiCallService } from 'src/app/modules/shared/services/api-call.service';
import { Category } from 'src/app/interfaces/categories';
import { Pages } from 'src/app/interfaces/pages';
import { ActivatedRoute, Router } from '@angular/router';
import { Instructor } from 'src/app/interfaces/instructors';
import { AssetsService } from 'src/app/modules/shared/services/assets.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit {

  displayedColumns: string[] = ['#','photo' ,'name', 'email', 'courses', 'status', 'price', 'action'];
  isLoading: boolean = false;
  activeCatName: string = "";
  instructors: Array<Instructor>;
  categories: Array<Category>;
  filteredCategories: Array<Category>;
  courses: Array<Course>;
  categoryId: number = 0;
  pages:Pages = {
    current_page: 1,
    last_page: 1
  };

  constructor(private api: ApiCallService, private route: ActivatedRoute, private router: Router, private assets: AssetsService) { }

  ngOnInit(): void {
    this.setCurrentPage(); // for query params | 1
    // this.setCategoryId(); // for query params | 0
    
    this.getAllInstructors();
    this.getAllCategories();
  
    // if (!this.categoryId)
    this.getAllCourses();
    // else
    //   this.getCoursesByCategory();
  }

  private getAllInstructors(){
    this.api.getAllInstructors()
      .subscribe(
        res => this.instructors = res
      ),
      ()=>{this.instructors = null},
      ()=>{}
      ;
  }

  
  filterCategories(value){
    this.filteredCategories = (value)? this.categories.filter(res=> res.name.toLowerCase().includes(value.trim().toLowerCase())): this.categories;    
  }

  
  
  private getAllCategories(){
    this.api.getAllCategories()
      .subscribe( 
        res=> this.filteredCategories = this.categories = res,
        () => this.filteredCategories = this.categories = null,
        () => {}
      );
  }

  private getAllCourses(){
    this.activeCatName = 'All'; 
    this.isLoading = true;
    this.api.getAllCourses(this.pages.current_page)
      .subscribe(
        res=> {

          this.pages.current_page = res.current_page;

          this.pages.last_page = res.last_page;
          this.courses = res.data;
          
          this.router.navigate([], {
                queryParams: {'page': this.pages.current_page},
          });
        },
        () => {},
        () => this.isLoading = false
      );
  }

  // private getCoursesByCategory(){
  //   this.isLoading = true;
  //   this.api.getCoursesByCategory(this.categoryId)
  //     .subscribe(
  //       res=> {
  //         this.courses = res.data;
  //       },
  //       () => {},
  //       () => this.isLoading = false
  //     )
  // }

  // private setCategoryId(){
  //     this.route.queryParamMap
  //       .subscribe(
  //         res => this.categoryId =  parseInt(res.get('category_id')) | 0   
  //     );
  // }

  private setCurrentPage() {
    this.route.queryParamMap
      .subscribe(
        res =>  this.pages.current_page = parseInt(res.get('page')) || 1 
      )
  }

  // changeCategory(cat){ // for filtering
  //   this.categoryId = cat.id;
  //   this.activeCatName = cat.name ;

  //   if(!cat.id) {
  //     this.router.navigate([]);
  //     this.getAllCourses();
  //     return
  //   };
    
  //   this.router.navigate([], {
  //     queryParams: {'page': this.pages.current_page, 'category_id': cat.id},
  //   });
   
  //    this.getCoursesByCategory();
  //   this.setCategoryId();
  // }


  
  deleteAlert(id){
    this.assets.deleteAlert().subscribe(res=> res? this.deleteCourse(id): false );;
  }

  deleteCourse(id){
    this.api.deleteCourse(id).subscribe(
      res=>{
        this.assets.addSuccess().afterDismissed().subscribe(res=>{
          location.reload();
        })
      },
      err=>{
      }
    )
  }

    
  prev(){
    if(this.pages.current_page <= 1) return
    this.pages.current_page--;
    this.getAllCourses();
    
  }

  next(){
    if(this.pages.current_page >= this.pages.last_page) return
    
    this.pages.current_page++;
    this.getAllCourses();
    
  }
 

  
}
