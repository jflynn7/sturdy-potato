import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableOccupancyPageComponent } from './variable-occupancy-page.component';

describe('VariableOccupancyPageComponent', () => {
  let component: VariableOccupancyPageComponent;
  let fixture: ComponentFixture<VariableOccupancyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableOccupancyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableOccupancyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
