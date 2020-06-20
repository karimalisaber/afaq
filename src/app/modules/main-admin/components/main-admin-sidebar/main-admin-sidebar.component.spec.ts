import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminSidebarComponent } from './main-admin-sidebar.component';

describe('MainAdminSidebarComponent', () => {
  let component: MainAdminSidebarComponent;
  let fixture: ComponentFixture<MainAdminSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdminSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
