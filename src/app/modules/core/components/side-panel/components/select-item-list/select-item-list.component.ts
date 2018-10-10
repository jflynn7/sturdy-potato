import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormElementOption, FormUpdateData } from '../../../../content/forms';
import { ToggleSidePanelVisibility } from '../../state/side-panel.actions';
import { UpdateFormData } from '../../../../state/core-data/core-data.actions';

@Component({
  selector: 'app-select-item-list',
  templateUrl: './select-item-list.component.html',
  styleUrls: ['./select-item-list.component.scss']
})
export class SelectItemListComponent implements OnInit {

  @Input() data: FormElementOption[];
  @Input() formId: string;
  @Input() inputId: string;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  selectOption(option: FormElementOption) {
    this.store.dispatch(new UpdateFormData(
      <FormUpdateData> {
        formId: this.formId,
        inputId: this.inputId,
        value: option.value
      })
    );
    this.store.dispatch(new ToggleSidePanelVisibility(false));
  }

}
