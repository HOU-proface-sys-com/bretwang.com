import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgChatComponent } from './tg-chat.component';

describe('TgChatComponent', () => {
  let component: TgChatComponent;
  let fixture: ComponentFixture<TgChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TgChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TgChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
