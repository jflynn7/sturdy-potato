import { Action } from '@ngrx/store';

// ACTION CONSTANTS
export class CoreUiStateActionTypes {
  static REGISTER_TOGGLE_GROUP = '[CoreUiState] REGISTER_TOGGLE_GROUP';
  static SET_ACTIVE_TOGGLE_GROUP = '[CoreUiState] SET_ACTIVE_TOGGLE_GROUP';
  static SET_ACTIVE_TOGGLE = '[CoreUiState] SET_ACTIVE_TOGGLE';
  static RESET_TOGGLE = '[CoreUiState] RESET_TOGGLE';
  static NAVIGATE_TO = '[CoreUiState] NAVIGATE_TO';
  static SHOW_NOTIFICATION = '[CoreUiState] SHOW_NOTIFICATION';
  static HIDE_NOTIFICATION = '[CoreUiState] HIDE_NOTIFICATION';
}

// ACTIONS
export class RegisterToggleGroup implements Action {
  readonly type: string = CoreUiStateActionTypes.REGISTER_TOGGLE_GROUP;
  constructor(public payload: any) {}
}

export class SetActiveToggleGroup implements Action {
  readonly type: string = CoreUiStateActionTypes.SET_ACTIVE_TOGGLE_GROUP;
  constructor(public payload: any) {}
}

export class SetActiveToggle implements Action {
  readonly type: string = CoreUiStateActionTypes.SET_ACTIVE_TOGGLE;
  constructor(public payload: any) {}
}

export class ResetToggle implements Action {
  readonly type: string = CoreUiStateActionTypes.RESET_TOGGLE;
  constructor(public payload: any) {}
}

export class NavigateTo implements Action {
  readonly type: string = CoreUiStateActionTypes.NAVIGATE_TO;
  constructor(public payload: any) {}
}

export class ShowNotification implements Action {
  readonly type: string = CoreUiStateActionTypes.SHOW_NOTIFICATION;
  constructor(public payload: any) {}
}

// EXPORT ACTIONS
export type CoreUiStateActions =
    RegisterToggleGroup
  | SetActiveToggleGroup
  | SetActiveToggle
  | ResetToggle
  | NavigateTo
  | ShowNotification;
