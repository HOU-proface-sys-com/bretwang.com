import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayArray01Component } from './play-array01.component';

describe('PlayArray01Component', () => {
  let component: PlayArray01Component;
  let fixture: ComponentFixture<PlayArray01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayArray01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayArray01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
