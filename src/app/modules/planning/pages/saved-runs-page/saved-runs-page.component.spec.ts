import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRunsPageComponent } from './saved-runs-page.component';

describe('SavedRunsPageComponent', () => {
  let component: SavedRunsPageComponent;
  let fixture: ComponentFixture<SavedRunsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedRunsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedRunsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
