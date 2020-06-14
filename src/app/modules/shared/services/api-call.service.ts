import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/categories';
import { getAllCategoriesUrl, getAllCoursesUrl, getCoursesOfCategoriesUrl, getRelatedCoursesUrl, getSpecificCoursesUrl, getAllInstructorsUrl, getHomeDataUrl, getJobListUrl, registerPostUrl, loginPostUrl,  } from 'src/app/backend/variables/Apis';
import { Courses, Course } from 'src/app/interfaces/courses';
import { Instructor } from 'src/app/interfaces/instructors';
import { HomeData } from 'src/app/interfaces/home-data';
import {map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
 lang = 0;
  constructor(private http: HttpClient) { }

  // categories & courses
  getAllCategories(): Observable<Array<Category>>{
    return this.http.get(getAllCategoriesUrl + this.lang).pipe(map((res:any)=> res.data), take(1));
  }

  getAllCourses(pageNumber): Observable<Courses>{
    return this.http.get(getAllCoursesUrl + this.lang + '?page=' + pageNumber).pipe(map((res:any)=> res.data), take(1));
  }

  getCoursesByCategory(id): Observable<Courses>{
    return this.http.get(getCoursesOfCategoriesUrl + id + '/' +this.lang).pipe(map((res:any)=> res), take(1));
  }

  getSpecificCourse(id): Observable<Course>{
    return this.http.get(getSpecificCoursesUrl + id + '/' +  this.lang).pipe(map((res:any)=> res.data), take(1));
  }
 
  getRelatedCourses(catId): Observable<Courses>{
    return this.http.get(getRelatedCoursesUrl + catId + '/' +  this.lang).pipe(map((res:any)=> res.data), take(1));
  }


  // instructors
   getAllInstructors(): Observable<Array<Instructor>>{
     return this.http.get(getAllInstructorsUrl + this.lang).pipe(map((res:any)=> res.data), take(1));
  }

  // home data
  getHomeData(): Observable<HomeData>{
    return this.http.get(getHomeDataUrl + this.lang).pipe(map((res:any)=> res.data), take(1));
 }

 
  // get jobs
  getJobList(): Observable<HomeData>{
    return this.http.get(getJobListUrl).pipe(map((res:any)=> res.data), take(1));
 }


 // aut 
 // register

  register(credientails){
    return this.http.post(registerPostUrl, credientails);
  }

  login(credientails){
    return this.http.post(loginPostUrl, credientails);
  }

}
