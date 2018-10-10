import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalSpendSummaryPageComponent } from './capital-spend-summary-page.component';

describe('CapitalSpendSummaryPageComponent', () => {
  let component: CapitalSpendSummaryPageComponent;
  let fixture: ComponentFixture<CapitalSpendSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalSpendSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalSpendSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
