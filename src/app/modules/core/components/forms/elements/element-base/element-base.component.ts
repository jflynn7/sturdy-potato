import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from '../../../../content/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-element-base',
  templateUrl: './element-base.component.html',
  styleUrls: ['./element-base.component.scss']
})
export class ElementBaseComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() element: FormElement;
  @Input() formId: string;

  constructor() { }

  ngOnInit() {
  }

}
