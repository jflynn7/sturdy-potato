import { Component, Input, OnInit } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { selectToggleGroupById } from '../../../../state/core-ui/core-ui.selectors';
import { SetActiveToggle } from '../../../../state/core-ui/core-ui.actions';

@Component({
  selector: 'app-toggle-group',
  templateUrl: './toggle-group.component.html',
  styleUrls: ['./toggle-group.component.scss']
})
export class ToggleGroupComponent implements OnInit {

  @Input() toggleOptions: ToggleConfig[];
  @Input() toggleGroupId: string;
  @Input() defaultSelection: string;

  activeToggle: string;
  mobileMenuExpanded = false;

  constructor(public store: Store<any>) { }

  ngOnInit() {

    // On init, set the default selected toggle
    this.defaultSelection ? this.store.dispatch(new SetActiveToggle(
      <ToggleGroupState> {
        activeToggle: this.defaultSelection,
        toggleGroupId: this.toggleGroupId
      })) : undefined;

    // Subscribe to memoized selector to get toggle group state
    // for this toggle group only
    this.store.subscribe(() => {
      this.store.pipe(
        select(selectToggleGroupById(this.toggleGroupId)))
        .subscribe((toggleState: ToggleGroupState) => {
          this.activeToggle = toggleState.activeToggle;
        });
    });
  }

  /**
   * On click
   * - Set the active toggle group in ui state to this one
   * - Set the active toggle to the toggleId click
   * - Finally, dispatch the action attached to the toggle
   * @param {string} toggleId
   * @param {Action} action
   * @param fn
   */
  handleClick(toggleGroupId: string, toggleId: string, action?: Action, fn?: Function) {
    toggleId !== this.activeToggle ? this.toggleMobileMenu() : undefined;
    this.store.dispatch(new SetActiveToggle(
      <ToggleGroupState> {
        activeToggle: toggleId,
        toggleGroupId: toggleGroupId
      }
    ));
    action ? this.store.dispatch(action) : undefined;
    fn ? fn() : undefined;
  }

  /**
   * Get the CSS class for the toggle (first, middle, last + selected)
   * @param {number} index
   */
  getClazz(index: number, toggleId: string, options: any[], activeToggle?: string) {
    let clazz: string;

    if (index === 0) {
      clazz = 'first';
    } else if (index === options.length - 1) {
      clazz = 'last';
    } else {
      clazz = 'middle';
    }

    this.activeToggle === toggleId || activeToggle === toggleId ? clazz += ' selected' : undefined;
    this.mobileMenuExpanded ? clazz += ' expanded' : undefined;
    return clazz;
  }

  toggleMobileMenu() {
    this.mobileMenuExpanded = !this.mobileMenuExpanded;
  }

}

/**
 * State interface for toggle group
 */
export interface ToggleGroupState {
  toggleGroupId?: string;
  activeToggle?: string;
}

/**
 * ToggleConfig interface
 * - label: The label to be displayed on the toggle button
 * - id: Unique ID for the toggle option (used to store selected state)
 * - action: An NGRX action to dispatch when clicked (optional)
 * - fn: A function to execute when clicked (optional)
 */
export interface ToggleConfig {
  label?: string;
  id?: string;
  action?: Action;
  fn?: Function;
}
