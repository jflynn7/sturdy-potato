import { Component, Input, OnInit } from '@angular/core';
import { PanelState, SidePanel } from '../../../side-panel/state/side-panel.reducers';
import { select, Store } from '@ngrx/store';
import { selectFormDataByFormIdAndInputId, selectPanelStateByController } from '../../../side-panel/state/side-panel.selectors';
import { ElementBaseComponent } from '../element-base/element-base.component';
import { PanelService } from '../../../../services/panel.service';

@Component({
  selector: 'app-select',
  templateUrl: './side-menu-select.component.html',
  styleUrls: ['./side-menu-select.component.scss']
})
export class SideMenuSelectComponent extends ElementBaseComponent implements OnInit {

  @Input() formId: string;
  active: boolean;

  constructor(private store: Store<any>, private panelService: PanelService) {
    super();
  }

  ngOnInit() {
    this.store.subscribe(() => {

      // Subscribe to panel state
      this.store.pipe(
        select(selectPanelStateByController('select')))
        .subscribe((panelState: PanelState) => {
          this.active = panelState.isShown;
        });

      // Subscribe to formGroup value
      this.store.pipe(
        select(selectFormDataByFormIdAndInputId(this.formId, this.element.inputId)))
        .subscribe((formValue: any) => {
          this.formGroup.get(this.element.inputId).setValue(formValue);
        }
      );

    });

  }

  openMenu(panel: SidePanel) {
    this.panelService.setSelectPanel(panel, true);
  }

}
