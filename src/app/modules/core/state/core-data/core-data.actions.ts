// ACTION CONSTANTS
import {
  GenericLoadError,
  LoadDirectCosts,
  LoadDirectCostsSuccess, LoadOpexSummary, LoadOpexSummarySuccess, LoadRechargesSummary, LoadRechargesSummarySuccess,
  LoadVersions,
  LoadVersionsSuccess
} from './action-subsets/load-planning-tables.actions';
import { WriteCtrlYear } from './action-subsets/write-planning.actions';
import { Action } from '@ngrx/store';
import { SidePanelActionTypes } from '../../components/side-panel/state/side-panel.actions';

export class CoreDataStateActionTypes {

  static LOAD_DIRECT_COSTS = '[CoreDataState] LOAD_DIRECT_COSTS';
  static LOAD_DIRECT_COSTS_SUCCESS = '[CoreDataState] LOAD_DIRECT_COSTS_SUCCESS';

  static LOAD_VERSIONS = '[CoreDataState] LOAD_VERSIONS';
  static LOAD_VERSIONS_SUCCESS = '[CoreDataState] LOAD_VERSIONS_SUCCESS';

  static LOAD_OPEX_SUMMARY = '[CoreDataState] LOAD_OPEX_SUMMARY';
  static LOAD_OPEX_SUMMARY_SUCCESS = '[CoreDataState] LOAD_OPEX_SUMMARY_SUCCESS';

  static LOAD_RECHARGES_SUMMARY = '[CoreDataState] LOAD_RECHARGES_SUMMARY';
  static LOAD_RECHARGES_SUMMARY_SUCCESS = '[CoreDataState] LOAD_RECHARGES_SUMMARY_SUCCESS';

  static WRITE_CTRL_YEAR = '[CoreDataState] WRITE_CTRL_YEAR';

  static GENERIC_LOAD_ERROR = '[CoreDataState] GENERIC_LOAD_ERROR';
  static UPDATE_FORM_DATA = '[CoreDataState] UPDATE_FORM_DATA';

}

export class UpdateFormData implements Action {
  readonly type: string = CoreDataStateActionTypes.UPDATE_FORM_DATA;
  constructor(public payload: any) {}
}

// EXPORT ACTIONS
export type CoreDataStateActions =

  // Planning Load Actions
    LoadDirectCosts
  | LoadDirectCostsSuccess
  | LoadVersions
  | LoadVersionsSuccess
  | LoadOpexSummary
  | LoadOpexSummarySuccess
  | LoadRechargesSummary
  | LoadRechargesSummarySuccess
  | GenericLoadError

  // Planning Write Actions
  | WriteCtrlYear

  // Data Updates
  | UpdateFormData;
