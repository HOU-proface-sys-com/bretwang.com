import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayArray02Component } from './play-array02.component';

describe('PlayArray02Component', () => {
  let component: PlayArray02Component;
  let fixture: ComponentFixture<PlayArray02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayArray02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayArray02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
