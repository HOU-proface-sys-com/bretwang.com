import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgPlaygroundComponent } from './tg-playground.component';

describe('TgPlaygroundComponent', () => {
  let component: TgPlaygroundComponent;
  let fixture: ComponentFixture<TgPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TgPlaygroundComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TgPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
