import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalButtonMenuComponent } from './horizontal-button-menu.component';

describe('HorizontalButtonMenuComponent', () => {
  let component: HorizontalButtonMenuComponent;
  let fixture: ComponentFixture<HorizontalButtonMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalButtonMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
