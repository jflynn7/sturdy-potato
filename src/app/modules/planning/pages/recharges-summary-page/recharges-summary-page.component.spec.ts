import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargesSummaryPageComponent } from './recharges-summary-page.component';

describe('RechargesSummaryPageComponent', () => {
  let component: RechargesSummaryPageComponent;
  let fixture: ComponentFixture<RechargesSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargesSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargesSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
