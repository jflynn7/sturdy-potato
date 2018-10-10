import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormDefinition } from '../../../content/forms';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  @Input() formDefinition: FormDefinition;
  formGroup: FormGroup;

  constructor(private store: Store<any>, private formService: FormService) { }

  ngOnInit() {
    this.formGroup = this.formService.toFormGroup(this.formDefinition);
    this.formGroup.valueChanges.subscribe((data) => {
      // no-op for now...
    });
  }

}
