import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelComponent } from './select-side-menu.component';
import { Store, StoreModule } from '@ngrx/store';

describe('SelectSideMenuComponent', () => {
  let component: SidePanelComponent;
  let fixture: ComponentFixture<SidePanelComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ SidePanelComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanelComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
