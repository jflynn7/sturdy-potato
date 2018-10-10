/**
 * INTERFACES
 * - Here we define our object interfaces to allow
 * - us to use defined types across the application
 * - for type-safety
 */
import { CoreUiStateActions, CoreUiStateActionTypes } from './core-ui.actions';
import { ToggleGroupState } from '../../components/presentation/buttons/toggle-group/toggle-group.component';
import { NotificationConfig } from '../../components/notification/notification.component';

export interface CoreUiState {
  toggles?: {};
  activeToggleGroup?: string;
  notification?: NotificationConfig;
}

/**
 * INITIAL STATE
 * - Set-up the initial state for this component/feature
 */
export const initialState: CoreUiState = {
  toggles: {},
  activeToggleGroup: undefined
};

/**
 * REDUCER
 * - Reducers specific to this component/feature
 */
export function reducer(
  state: CoreUiState = initialState,
  action: CoreUiStateActions
): CoreUiState {
  switch (action.type) {

    // Toggles
    case CoreUiStateActionTypes.SET_ACTIVE_TOGGLE:
      return {
        ...state,
        toggles: setActiveToggle(state, action.payload)
      };


    // Notifications
    case CoreUiStateActionTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        notification: action.payload
      };
    default: {
      return state;
    }
  }
}

/**
 * Helper functions to mutate state before
 * assigning to store (keeps main reducer function
 * clean and tidy)
 */
function setActiveToggle(state: CoreUiState, toggleUpdate: ToggleGroupState) {
  const toggleState = state.toggles;
  if (!toggleState[toggleUpdate.toggleGroupId]) {
    toggleState[toggleUpdate.toggleGroupId] = { activeToggle: toggleUpdate.activeToggle };
  }
  toggleState[toggleUpdate.toggleGroupId].activeToggle = toggleUpdate.activeToggle;
  return toggleState;
}
