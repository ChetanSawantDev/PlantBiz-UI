import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatLinkComponent } from './user-chat-link.component';

describe('UserChatLinkComponent', () => {
  let component: UserChatLinkComponent;
  let fixture: ComponentFixture<UserChatLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChatLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserChatLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
