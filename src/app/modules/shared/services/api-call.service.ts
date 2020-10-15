import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/categories';
import { getAllCategoriesUrl, getAllCoursesUrl, getCoursesOfCategoriesUrl, getRelatedCoursesUrl, getSpecificCoursesUrl, getAllInstructorsUrl, getHomeDataUrl, getJobListUrl, registerPostUrl, loginPostUrl, getAllStudentsUrl, getChatParticipantsUrl, getSpecificChatRoomUrl, postCourseUrl, postCourseRequirementsUrl, postChapterUrl, deleteCateoryUrl, getSpecificCateoryUrl, updateCateoryUrl, addEventUrl, getAllEventsUrl, deleteCourseUrl, deleteInstructorUrl, addToCartUrl,  } from 'src/app/backend/variables/Apis';
import { Courses, Course } from 'src/app/interfaces/courses';
import { Instructor, Instructors } from 'src/app/interfaces/instructors';
import { HomeData } from 'src/app/interfaces/home-data';
import {map, take } from 'rxjs/operators';
import { forgetPasswordUrl, addCateoryUrl, addInstructorUrl, deleteEventsUrl, getSpecificInstructorUrl } from './../../../backend/variables/Apis';
// import { ProgressHttp } from "angular-progress-http";

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
 
  getRelatedCourses(catId){
    return this.http.get(getRelatedCoursesUrl + catId + '/' +  this.lang).pipe(map((res:any)=> res.data), take(1));
  }


   // instructor 
   addInstructor(instructor){
    return this.http.post(addInstructorUrl, instructor);
  }

  getSpecificInstructor(id){
    return this.http.get(getSpecificInstructorUrl + id).pipe(map((res:any)=> res.data), take(1));

  }
  

  deleteInstructor(id){
    return this.http.delete(deleteInstructorUrl+ id);
  }


    // courses 
    addCourse(course){
      return this.http.post(postCourseUrl, course);
    }

    addCourseRequirements(req){
      return this.http.post(postCourseRequirementsUrl, req);

    }

    addChapter(chapter){
      return this.http.post(postChapterUrl, chapter, {
        reportProgress: true,
        observe: 'events'
      });

    }
    
    deleteCourse(id){
      return this.http.delete(deleteCourseUrl + id);
    }

    addToCart(body){
      return this.http.post( addToCartUrl,body)
    }

    // event
    
    getAllEvents(pageNumber): Observable<Courses>{
      return this.http.get(getAllEventsUrl + this.lang + '?page=' + pageNumber).pipe(map((res:any)=> res.data), take(1));
    }

    addEvent(event){
      return this.http.post(addEventUrl, event);
    }

    
    deleteEvent(id){
      return this.http.delete(deleteEventsUrl + id);
    }


  // instructors
   getAllInstructors(): Observable<Array<Instructor>>{
     return this.http.get(getAllInstructorsUrl + this.lang).pipe(map((res:any)=> res.data), take(1));
  }

  // chat 
  getAllStudents(pageNumber): Observable<Instructors>{ // used in chat
    return this.http.get(getAllStudentsUrl + '?page=' + pageNumber).pipe(map((res:any)=> res.data), take(1));
  }

  getSpecificChatRoom(id): Observable<Array<Instructor>>{ // used in chat
    return this.http.get(getSpecificChatRoomUrl + id).pipe(map((res:any)=> res.data), take(1));
  }
  
  getChatParticipants(id ){ // used in chat
    
    return this.http.get(getChatParticipantsUrl + id).pipe(map((res:any)=> res.data), take(1));
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

    
  forgetPassword(phone){
    return this.http.post(forgetPasswordUrl, phone);
     
  }

  // categories
  addCategory(category){
    return this.http.post(addCateoryUrl, category);
  }

  updateCategory(id,category){
    return this.http.post(updateCateoryUrl + id, category);
  }

  deleteCategory(id){
    return this.http.delete(deleteCateoryUrl + id);
  }


  getSpecificCategory(id){
    return this.http.get(getSpecificCateoryUrl + id).pipe(map((res:any)=> res.data), take(1));
  }


}

