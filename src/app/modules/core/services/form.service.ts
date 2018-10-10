import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormDefinition, FormElement } from '../content/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }

  toFormGroup(formDefinition: FormDefinition) {
    const formElements = {};
    formDefinition.elements.forEach((element: FormElement) => {
      formElements[element.inputId] = [''];
    });

    return this.fb.group(formElements);
  }
}
