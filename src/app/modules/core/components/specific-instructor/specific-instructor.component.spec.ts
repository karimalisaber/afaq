import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificInstructorComponent } from './specific-instructor.component';

describe('SpecificInstructorComponent', () => {
  let component: SpecificInstructorComponent;
  let fixture: ComponentFixture<SpecificInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
