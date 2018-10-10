import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningDashboardPageComponent } from './planning-dashboard-page.component';

describe('PlanningDashboardPageComponent', () => {
  let component: PlanningDashboardPageComponent;
  let fixture: ComponentFixture<PlanningDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
