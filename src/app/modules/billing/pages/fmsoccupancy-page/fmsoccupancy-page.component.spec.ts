import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FMSOccupancyPageComponent } from './fmsoccupancy-page.component';

describe('FMSOccupancyPageComponent', () => {
  let component: FMSOccupancyPageComponent;
  let fixture: ComponentFixture<FMSOccupancyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FMSOccupancyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FMSOccupancyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
