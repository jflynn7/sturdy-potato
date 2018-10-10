import { createSelector } from "@ngrx/store";
import { CoreUiState } from "./core-ui.reducers";
import { State } from "../../../../reducers";
import { ToggleGroupState } from "../../components/presentation/buttons/toggle-group/toggle-group.component";
import { NotificationConfig } from '../../components/notification/notification.component';

/**
 * SELECTORS
 * - Simple selectors to return commonly used
 * - state items
 */
export const selectCoreUiState = (state: State) => state.uiState;

/**
 * Toggles
 * @param toggleGroupId
 * @returns {MemoizedSelector<any, >}
 */
export const selectToggleGroupById = (toggleGroupId) => createSelector(
  selectCoreUiState,
  (state: CoreUiState): ToggleGroupState => {
    return state.toggles[toggleGroupId];
  });

export const selectActiveNotification = () => createSelector(
  selectCoreUiState,
  (state: CoreUiState): NotificationConfig => {
    return state.notification;
  }
);

