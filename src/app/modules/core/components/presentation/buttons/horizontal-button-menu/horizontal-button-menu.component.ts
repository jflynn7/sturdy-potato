import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ToggleConfig, ToggleGroupComponent, ToggleGroupState } from '../toggle-group/toggle-group.component';
import { RegisterToggleGroup, SetActiveToggle } from '../../../../state/core-ui/core-ui.actions';
import { selectToggleGroupById } from '../../../../state/core-ui/core-ui.selectors';

@Component({
  selector: 'app-horizontal-button-menu',
  templateUrl: './horizontal-button-menu.component.html',
  styleUrls: ['./horizontal-button-menu.component.scss']
})
export class HorizontalButtonMenuComponent extends ToggleGroupComponent implements OnInit, OnChanges {

  @Input() menuId: string;
  @Input() selected: string;
  @Input() navOptions: ToggleConfig[];

  activeToggle: string;

  constructor(store: Store<any>) {
    super(store);
  }

  ngOnInit() {
    // On init, set the default selected toggle
    this.selected ? this.store.dispatch(new SetActiveToggle(<ToggleGroupState> {
      activeToggle: this.selected,
      toggleGroupId: this.menuId
    })) : null;

    // Subscribe to memoized selector to get toggle group state
    // for this toggle group only
    this.store.subscribe(() => {
      this.store.pipe(
        select(selectToggleGroupById(this.menuId)))
        .subscribe((toggleState: ToggleGroupState) => {
          if (toggleState) {
            this.activeToggle = toggleState.activeToggle;
          }
        });
    });
  }

  ngOnChanges() {
    this.selected ? this.store.dispatch(new SetActiveToggle(this.selected)) : null;
  }

}
