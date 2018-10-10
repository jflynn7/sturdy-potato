import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SidePanel } from '../components/side-panel/state/side-panel.reducers';
import {
  AddNewPanel,
  SetPanelStateController,
  SwitchActivePanel,
  ToggleSidePanelVisibility
} from '../components/side-panel/state/side-panel.actions';

export const Panels = {
  MAIN: 'main',
  SELECT: 'select'
};

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private store: Store<any>) { }

  /**
   * Set the content of the main panel
   * @param {SidePanel} panel
   * @param {boolean} andShow
   */
  setMainPanel(panel: SidePanel, andShow?: boolean) {
    this.store.dispatch(new SetPanelStateController(Panels.MAIN));
    this.store.dispatch(new AddNewPanel(panel));
    this.store.dispatch(new SwitchActivePanel(panel));
    this.toggleMainPanel(andShow);
  }

  /**
   * Toggle visibility of the main panel.
   * NB: Secondary panel should hide when main one is shown
   * @param {boolean} isShown
   */
  toggleMainPanel(isShown: boolean) {
    this.store.dispatch(new SetPanelStateController(Panels.SELECT));
    this.store.dispatch(new ToggleSidePanelVisibility(false));
    this.store.dispatch(new SetPanelStateController(Panels.MAIN));
    this.store.dispatch(new ToggleSidePanelVisibility(isShown));
  }

  /**
   * Set the content of the secondary panel
   * @param {SidePanel} panel
   * @param {boolean} andShow
   */
  setSelectPanel(panel: SidePanel, andShow?: boolean) {
    this.store.dispatch(new SetPanelStateController(Panels.SELECT));
    this.store.dispatch(new AddNewPanel(panel));
    this.store.dispatch(new SwitchActivePanel(panel));
    this.toggleSecondaryPanel(andShow);
  }

  /**
   * Toggle visibility of secondary panel
   * @param {boolean} isShown
   */
  toggleSecondaryPanel(isShown: boolean) {
    this.store.dispatch(new SetPanelStateController(Panels.SELECT));
    this.store.dispatch(new ToggleSidePanelVisibility(isShown));
  }

}
