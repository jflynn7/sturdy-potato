import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauVisualisationComponent } from './tableau-visualisation.component';

describe('TableauVisualisationComponent', () => {
  let component: TableauVisualisationComponent;
  let fixture: ComponentFixture<TableauVisualisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauVisualisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
