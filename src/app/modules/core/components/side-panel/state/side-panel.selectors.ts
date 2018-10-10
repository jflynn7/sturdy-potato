import { State} from '../../../../../reducers';
import { PanelState, SidePanelState } from './side-panel.reducers';
import { createSelector } from '@ngrx/store';

/**
 * SELECTORS
 * - Simple selectors to return commonly used
 * - state items
 */
export const selectSidePanel = (state: State) => state.sidePanelState;
export const selectDataState = (state: State) => state.dataState;
export const selectFormData = (state: State) => state.dataState.formData;


export const selectPanels = createSelector(
  selectSidePanel,
  (state: SidePanelState) => state.panels
);

export const selectPanelActiveByController = (viewStateController) => createSelector(
  selectSidePanel,
  (state: SidePanelState): boolean => {
    console.log(state);
    if (!state.panelStates[viewStateController]) {
      return false;
    } else {
      return state.panelStates[viewStateController].isShown;
    }
  }
);

export const selectPanelStateByController = (viewStateController) => createSelector(
  selectSidePanel,
  (state: SidePanelState): PanelState => {
    return state.panelStates[viewStateController];
  });

export const selectFormDataByFormIdAndInputId = (formId: string, inputId: string) => createSelector(
  selectFormData,
  (state: any): any => {
    return state[formId] ? state[formId][inputId] : '';
  }
);
