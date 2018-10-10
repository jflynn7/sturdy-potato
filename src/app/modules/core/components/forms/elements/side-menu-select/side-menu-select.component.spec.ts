import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuSelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SideMenuSelectComponent;
  let fixture: ComponentFixture<SideMenuSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
