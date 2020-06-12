import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificCourseComponent } from './view-specific-course.component';

describe('ViewSpecificCourseComponent', () => {
  let component: ViewSpecificCourseComponent;
  let fixture: ComponentFixture<ViewSpecificCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpecificCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecificCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
