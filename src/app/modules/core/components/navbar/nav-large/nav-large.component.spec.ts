import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLargeComponent } from './nav-large.component';

describe('NavLargeComponent', () => {
  let component: NavLargeComponent;
  let fixture: ComponentFixture<NavLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
