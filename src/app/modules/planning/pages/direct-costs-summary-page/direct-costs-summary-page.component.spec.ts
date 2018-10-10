import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectCostsSummaryPageComponent } from './direct-costs-summary-page.component';

describe('DirectCostsSummaryPageComponent', () => {
  let component: DirectCostsSummaryPageComponent;
  let fixture: ComponentFixture<DirectCostsSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectCostsSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectCostsSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
