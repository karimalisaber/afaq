import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRevenuComponent } from './admin-revenu.component';

describe('AdminRevenuComponent', () => {
  let component: AdminRevenuComponent;
  let fixture: ComponentFixture<AdminRevenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRevenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
