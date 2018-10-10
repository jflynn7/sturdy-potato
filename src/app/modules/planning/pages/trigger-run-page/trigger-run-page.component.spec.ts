import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerRunPageComponent } from './trigger-run-page.component';

describe('TriggerRunPageComponent', () => {
  let component: TriggerRunPageComponent;
  let fixture: ComponentFixture<TriggerRunPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerRunPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerRunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
