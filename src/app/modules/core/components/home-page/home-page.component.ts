import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiCallService } from './../../../shared/services/api-call.service';
import { HomeData } from './../../../../interfaces/home-data';
import { Course } from 'src/app/interfaces/courses';
import { Instructor } from 'src/app/interfaces/instructors';


const CarsoulOptions:  OwlOptions = { // for carsuals
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: false
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  CarsoulOptions = CarsoulOptions;
  CarsoulInstructorsOptions = Object.assign({},CarsoulOptions);
  isDragging;
  homeDate :HomeData;
  courses: Course[];
  instructors: Instructor[];
  @ViewChild('instructor') instructorSlider;

  constructor(private api: ApiCallService) { 
    
  }

  ngOnInit(): void {
    this.sliderInit();

    this.getHomeData();
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  
    
  }

  private getHomeData(){
    this.api.getHomeData()
      .subscribe(
        res=> {
          this.courses = res.trend_courses;      
          this.instructors = res.instructores;       
        }
      );
  }

  private sliderInit(){
    this.CarsoulInstructorsOptions.responsive ={
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      } 
    }
  }


  // koko(e){
  //   let item = document.getElementById('fas_long');
  //   // this.Instructor.slides.first.id
  //   if(e.startPosition > 0) item.classList.add('active');
  //   else item.classList.remove('active');
  //     // console.log(this.Instructor.slides.first.id)
    
    
  // }

}
