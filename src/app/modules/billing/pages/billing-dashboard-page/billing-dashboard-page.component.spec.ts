import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingDashboardPageComponent } from './billing-dashboard-page.component';

describe('BillingDashboardPageComponent', () => {
  let component: BillingDashboardPageComponent;
  let fixture: ComponentFixture<BillingDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
