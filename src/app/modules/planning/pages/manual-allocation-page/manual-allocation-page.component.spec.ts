import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualAllocationPageComponent } from './manual-allocation-page.component';

describe('ManualAllocationPageComponent', () => {
  let component: ManualAllocationPageComponent;
  let fixture: ComponentFixture<ManualAllocationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualAllocationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualAllocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
