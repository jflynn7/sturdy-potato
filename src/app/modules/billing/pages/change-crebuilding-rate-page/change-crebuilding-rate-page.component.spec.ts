import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCREBuildingRatePageComponent } from './change-crebuilding-rate-page.component';

describe('ChangeCREBuildingRatePageComponent', () => {
  let component: ChangeCREBuildingRatePageComponent;
  let fixture: ComponentFixture<ChangeCREBuildingRatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCREBuildingRatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCREBuildingRatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
