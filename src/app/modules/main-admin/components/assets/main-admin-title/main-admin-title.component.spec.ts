import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminTitleComponent } from './main-admin-title.component';

describe('MainAdminTitleComponent', () => {
  let component: MainAdminTitleComponent;
  let fixture: ComponentFixture<MainAdminTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdminTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdminTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
