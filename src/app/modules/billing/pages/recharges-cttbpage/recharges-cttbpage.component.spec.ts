import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargesCTTBPageComponent } from './recharges-cttbpage.component';

describe('RechargesCTTBPageComponent', () => {
  let component: RechargesCTTBPageComponent;
  let fixture: ComponentFixture<RechargesCTTBPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargesCTTBPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargesCTTBPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
