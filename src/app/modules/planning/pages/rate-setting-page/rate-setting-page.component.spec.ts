import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSettingPageComponent } from './rate-setting-page.component';

describe('RateSettingPageComponent', () => {
  let component: RateSettingPageComponent;
  let fixture: ComponentFixture<RateSettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateSettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
