import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificUserChatComponent } from './specific-user-chat.component';

describe('SpecificUserChatComponent', () => {
  let component: SpecificUserChatComponent;
  let fixture: ComponentFixture<SpecificUserChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificUserChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificUserChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
