import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRERatesSummaryPageComponent } from './crerates-summary-page.component';

describe('CRERatesSummaryPageComponent', () => {
  let component: CRERatesSummaryPageComponent;
  let fixture: ComponentFixture<CRERatesSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRERatesSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRERatesSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
