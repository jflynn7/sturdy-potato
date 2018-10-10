import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSubmitAOPPageComponent } from './save-submit-aoppage.component';

describe('SaveSubmitAOPPageComponent', () => {
  let component: SaveSubmitAOPPageComponent;
  let fixture: ComponentFixture<SaveSubmitAOPPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveSubmitAOPPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSubmitAOPPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
