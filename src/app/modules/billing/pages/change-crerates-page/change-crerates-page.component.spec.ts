import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCRERatesPageComponent } from './change-crerates-page.component';

describe('ChangeCRERatesPageComponent', () => {
  let component: ChangeCRERatesPageComponent;
  let fixture: ComponentFixture<ChangeCRERatesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCRERatesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCRERatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
