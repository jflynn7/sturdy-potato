import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesPageComponent } from './upload-files-page.component';

describe('UploadFilesPageComponent', () => {
  let component: UploadFilesPageComponent;
  let fixture: ComponentFixture<UploadFilesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFilesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
