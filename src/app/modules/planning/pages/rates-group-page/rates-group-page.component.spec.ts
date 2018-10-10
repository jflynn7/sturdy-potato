import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesGroupPageComponent } from './rates-group-page.component';

describe('RatesGroupPageComponent', () => {
  let component: RatesGroupPageComponent;
  let fixture: ComponentFixture<RatesGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatesGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
