import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSmallComponent } from './nav-small.component';

describe('NavSmallComponent', () => {
  let component: NavSmallComponent;
  let fixture: ComponentFixture<NavSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
