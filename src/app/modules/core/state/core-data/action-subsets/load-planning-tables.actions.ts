// ACTIONS
import { Action } from '@ngrx/store';
import { CoreDataStateActionTypes } from '../core-data.actions';

export class LoadDirectCosts implements Action {
  readonly type: string = CoreDataStateActionTypes.LOAD_DIRECT_COSTS;
  constructor(public payload?: any) {}
}

export class LoadDirectCostsSuccess implements Action {
  readonly type: string = CoreDataStateActionTypes.LOAD_DIRECT_COSTS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadVersions implements Action {
  readonly type: string = CoreDataStateActionTypes.LOAD_VERSIONS;
  constructor(public payload?: any) {}
}

export class LoadVersionsSuccess implements Action {
  readonly type: string = CoreDataStateActionTypes.LOAD_VERSIONS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadOpexSummary implements Action {
  readonly type: string = CoreDataStateActionTypes.LOAD_OPEX_SUMMARY;
  constructor(public payload?: any) {}
}

export class LoadOpexSummarySuccess implements Action {
  readonly type: string = CoreDataStateActionTypes.LOAD_OPEX_SUMMARY_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadRechargesSummary implements Action {
  readonly type: string = CoreDataStateActionTypes.LOAD_RECHARGES_SUMMARY;
  constructor(public payload?: any) {}
}

export class LoadRechargesSummarySuccess implements Action {
  readonly type: string = CoreDataStateActionTypes.LOAD_RECHARGES_SUMMARY_SUCCESS;
  constructor(public payload: any) {}
}

export class GenericLoadError implements Action {
  readonly type: string = CoreDataStateActionTypes.GENERIC_LOAD_ERROR;
  constructor(public payload: any) {}
}
