import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorRevenuComponent } from './instructor-revenu.component';

describe('InstructorRevenuComponent', () => {
  let component: InstructorRevenuComponent;
  let fixture: ComponentFixture<InstructorRevenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorRevenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorRevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
