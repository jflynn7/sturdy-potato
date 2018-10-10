import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeManagementRatesPageComponent } from './change-management-rates-page.component';

describe('ChangeManagementRatesPageComponent', () => {
  let component: ChangeManagementRatesPageComponent;
  let fixture: ComponentFixture<ChangeManagementRatesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeManagementRatesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeManagementRatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
