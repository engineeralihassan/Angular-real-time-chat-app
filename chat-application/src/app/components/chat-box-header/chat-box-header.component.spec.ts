import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxHeaderComponent } from './chat-box-header.component';

describe('ChatBoxHeaderComponent', () => {
  let component: ChatBoxHeaderComponent;
  let fixture: ComponentFixture<ChatBoxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatBoxHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatBoxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
