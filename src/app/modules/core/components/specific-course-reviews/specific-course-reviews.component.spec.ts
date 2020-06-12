import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCourseReviewsComponent } from './specific-course-reviews.component';

describe('SpecificCourseReviewsComponent', () => {
  let component: SpecificCourseReviewsComponent;
  let fixture: ComponentFixture<SpecificCourseReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificCourseReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCourseReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
