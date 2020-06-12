import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCourseDescriptionComponent } from './specific-course-description.component';

describe('SpecificCourseDescriptionComponent', () => {
  let component: SpecificCourseDescriptionComponent;
  let fixture: ComponentFixture<SpecificCourseDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificCourseDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCourseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
