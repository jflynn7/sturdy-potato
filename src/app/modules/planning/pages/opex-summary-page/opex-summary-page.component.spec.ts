import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpexSummaryPageComponent } from './opex-summary-page.component';

describe('OpexSummaryPageComponent', () => {
  let component: OpexSummaryPageComponent;
  let fixture: ComponentFixture<OpexSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpexSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpexSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
