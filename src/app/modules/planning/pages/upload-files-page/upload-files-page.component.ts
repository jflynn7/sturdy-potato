import { Component, Injector, OnInit } from '@angular/core';
import { Forms } from '../../../core/content/forms';
import { PageBaseComponent } from '../../../core/pages/page-base/page-base.component';

@Component({
  selector: 'app-upload-files-page',
  templateUrl: './upload-files-page.component.html',
  styleUrls: ['./upload-files-page.component.scss']
})
export class UploadFilesPageComponent extends PageBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  // TEMPORARY FOR TESTING
  testForm = this.formService.toFormGroup(Forms.TestForm);
  testFormElements = Forms.TestForm;

  testViz: string = 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms';
  ngOnInit() {
  }

}
