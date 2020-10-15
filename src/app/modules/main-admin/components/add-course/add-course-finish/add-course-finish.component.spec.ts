import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseFinishComponent } from './add-course-finish.component';

describe('AddCourseFinishComponent', () => {
  let component: AddCourseFinishComponent;
  let fixture: ComponentFixture<AddCourseFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
