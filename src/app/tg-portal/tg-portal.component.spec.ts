import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgPortalComponent } from './tg-portal.component';

describe('TgPortalComponent', () => {
  let component: TgPortalComponent;
  let fixture: ComponentFixture<TgPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TgPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TgPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
