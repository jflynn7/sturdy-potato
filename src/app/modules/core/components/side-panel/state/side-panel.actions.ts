import { Action } from '@ngrx/store';

// ACTION CONSTANTS
export class SidePanelActionTypes {
  static ADD_PANEL = '[SidePanel] ADD_PANEL';
  static TOGGLE_PANEL_VISIBILITY = '[SidePanel] TOGGLE_PANEL_VISIBILITY';
  static SWITCH_ACTIVE_PANEL = '[SidePanel] SWITCH_ACTIVE_PANEL';
  static PUSH_PANEL_HISTORY = '[SidePanel] PUSH_PANEL_HISTORY';
  static SET_PANELSTATE_CONTROLLER = '[SidePanel] SET_PANELSTATE_CONTROLLER';
}

// ACTIONS
export class AddNewPanel implements Action {
  readonly type: string = SidePanelActionTypes.ADD_PANEL;
  constructor(public payload: any) {}
}

export class ToggleSidePanelVisibility implements Action {
  readonly type: string = SidePanelActionTypes.TOGGLE_PANEL_VISIBILITY;
  constructor(public payload: any) {}
}

export class SwitchActivePanel implements Action {
  readonly type: string = SidePanelActionTypes.SWITCH_ACTIVE_PANEL;
  constructor(public payload: any) {}
}

export class PushPanelHistory implements Action {
  readonly type: string = SidePanelActionTypes.PUSH_PANEL_HISTORY;
  constructor(public payload: any) {}
}

export class SetPanelStateController implements Action {
  readonly type: string = SidePanelActionTypes.SET_PANELSTATE_CONTROLLER;
  constructor(public payload: any) {}
}

// EXPORT ACTIONS
export type SidePanelActions =
    AddNewPanel
  | ToggleSidePanelVisibility
  | SwitchActivePanel
  | PushPanelHistory
  | SetPanelStateController;

export interface PanelControlRequest {
  panelController?: string;
  activePanel?: any;
}
