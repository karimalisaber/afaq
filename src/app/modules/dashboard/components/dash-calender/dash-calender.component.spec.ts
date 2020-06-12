import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCalenderComponent } from './dash-calender.component';

describe('DashCalenderComponent', () => {
  let component: DashCalenderComponent;
  let fixture: ComponentFixture<DashCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
