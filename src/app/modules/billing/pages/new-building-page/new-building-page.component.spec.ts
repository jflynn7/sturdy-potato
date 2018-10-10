import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBuildingPageComponent } from './new-building-page.component';

describe('NewBuildingPageComponent', () => {
  let component: NewBuildingPageComponent;
  let fixture: ComponentFixture<NewBuildingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBuildingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBuildingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
