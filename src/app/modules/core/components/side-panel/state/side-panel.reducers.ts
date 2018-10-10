import { SidePanelActions, SidePanelActionTypes } from './side-panel.actions';
import { EventEmitter, Type } from '@angular/core';
import { ButtonMenuComponent, ButtonMenuConfig } from '../components/button-menu/button-menu.component';
import { SelectItemListComponent } from '../components/select-item-list/select-item-list.component';
import { ButtonConfig } from '../../presentation/buttons/iconic-button/iconic-button.component';
import { NavigateTo } from '../../../state/core-ui/core-ui.actions';

/**
 * INTERFACES
 * - Here we define our object interfaces to allow
 * - us to use defined types across the application
 * - for type-safety
 */
export interface SidePanel {
  id?: string;
  title?: string;
  component?: Type<any>;
  data?: any;
  inputId?: any;
}

export interface PanelComponent {
  data?: any;
  id?: string;
  output?: EventEmitter<any>;
  formId?: string;
  inputId?: string;
}

export interface SidePanelState {
  panels?: SidePanel[];
  activePanelController?: string;
  panelStates?: {};
}

export interface PanelState {
  isShown?: boolean;
  activePanel?: SidePanel;
}


/**
 * INITIAL STATE
 * - Set-up the initial state for this component/feature
 */
export const initialState: SidePanelState = {
  panels: [
    <SidePanel> {
      id: 'iconic-menu',
      component: ButtonMenuComponent,
      data: <ButtonMenuConfig> {
        title: 'Actions',
        options: [
          <ButtonConfig> {
            icon: 'fas fa-file-upload',
            label: 'Upload Files',
            action: new NavigateTo('upload')
          },
          <ButtonConfig> {
            icon: 'fas fa-spinner',
            label: 'Trigger Run',
            action: new NavigateTo('trigger-run')
          },
          <ButtonConfig> {
            icon: 'fas fa-save',
            label: 'Save/Submit AOP',
            action: new NavigateTo('submit-aop')
          },
          <ButtonConfig> {
            icon: 'fas fa-check',
            label: 'Approvals',
            action: new NavigateTo('approvals')
          },
          <ButtonConfig> {
            icon: 'fas fa-sliders-h',
            label: 'Rate Setting',
            action: new NavigateTo('rate-setting')
          },
        ]
      },
      title: 'Iconic Menu'
    },
    <SidePanel> {
      id: 'select-item-list',
      component: SelectItemListComponent,
      data: ['test', 'etst', 'eset', 'sser'],
      title: 'Select Item Menu'
    }
  ],
  activePanelController: '',
  panelStates: {
    main: {
      isShown: false,
      activePanel: undefined
    },
    select: {
      isShown: false,
      activePanel: undefined
    }
  }
};

/**
 * REDUCER
 * - Reducers specific to this component/feature
 * @param {SidePanelState} state
 * @param {SidePanelActions} action
 * @returns {SidePanelState}
 */
export function reducer(
  state: SidePanelState = initialState,
  action: SidePanelActions
): SidePanelState {
  switch (action.type) {

    case SidePanelActionTypes.TOGGLE_PANEL_VISIBILITY:
      return {
        ...state,
        panelStates: updatePanelVisibility(state, action.payload)
      };

    case SidePanelActionTypes.ADD_PANEL:
      const panels = state.panels;
      if (!panelExists(panels, action.payload)) {
        panels.push(action.payload);
      }
      return {
        ...state,
        panels: panels
      };

    case SidePanelActionTypes.SWITCH_ACTIVE_PANEL:
      return {
        ...state,
        panelStates: updateActivePanel(state, action.payload)
      };

    case SidePanelActionTypes.SET_PANELSTATE_CONTROLLER:
      return {
        ...state,
        activePanelController: action.payload
      };

    default: {
      return state;
    }
  }
}


/**
 * Panel State Creators(ish)
 */
export function updateActivePanel(state: SidePanelState, activePanel: SidePanel) {
  const panelStates = state.panelStates;
  const updatePanelState = panelStates[state.activePanelController];
  updatePanelState.activePanel = activePanel;
  panelStates[state.activePanelController] = updatePanelState;
  return panelStates;
}

export function updatePanelVisibility(state: SidePanelState, isShown: boolean) {
  const panelStates = state.panelStates;
  const updatePanelState = panelStates[state.activePanelController];
  updatePanelState.isShown = isShown;
  panelStates[state.activePanelController] = updatePanelState;
  return panelStates;
}

/**
 * Checks if a panel already exists in the panel state
 * This way we can keep a track of all panel states as they're
 * initialised
 * @param {SidePanel[]} panels
 * @param {SidePanel} newPanel
 * @returns {boolean}
 */
export function panelExists(panels: SidePanel[], newPanel: SidePanel) {
  const existing = panels.find((panel: SidePanel) => {
    return panel.id === newPanel.id;
  });
  return !!existing;
}


