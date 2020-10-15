import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminHomeComponent } from './main-admin-home.component';

describe('MainAdminHomeComponent', () => {
  let component: MainAdminHomeComponent;
  let fixture: ComponentFixture<MainAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
