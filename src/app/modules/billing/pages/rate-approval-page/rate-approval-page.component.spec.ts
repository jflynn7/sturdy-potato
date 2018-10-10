import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateApprovalPageComponent } from './rate-approval-page.component';

describe('RateApprovalPageComponent', () => {
  let component: RateApprovalPageComponent;
  let fixture: ComponentFixture<RateApprovalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateApprovalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateApprovalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
