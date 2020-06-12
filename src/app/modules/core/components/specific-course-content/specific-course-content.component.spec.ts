import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCourseContentComponent } from './specific-course-content.component';

describe('SpecificCourseContentComponent', () => {
  let component: SpecificCourseContentComponent;
  let fixture: ComponentFixture<SpecificCourseContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificCourseContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
