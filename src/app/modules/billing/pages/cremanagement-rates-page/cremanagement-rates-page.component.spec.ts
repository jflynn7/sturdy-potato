import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CREManagementRatesPageComponent } from './cremanagement-rates-page.component';

describe('CREManagementRatesPageComponent', () => {
  let component: CREManagementRatesPageComponent;
  let fixture: ComponentFixture<CREManagementRatesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CREManagementRatesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CREManagementRatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
