import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInstructorsComponent } from './view-instructors.component';

describe('ViewInstructorsComponent', () => {
  let component: ViewInstructorsComponent;
  let fixture: ComponentFixture<ViewInstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
