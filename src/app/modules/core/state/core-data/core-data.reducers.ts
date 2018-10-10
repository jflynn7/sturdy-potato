import { CoreDataStateActions, CoreDataStateActionTypes } from './core-data.actions';
import { FormUpdateData } from '../../content/forms';
import { State } from '../../../../reducers';

/**
 * INTERFACES
 * - Here we define our object interfaces to allow
 * - us to use defined types across the application
 * - for type-safety
 */
export interface CoreDataState {
  directCostsSummary?: any[];
  versions?: any[];
  opexSummary?: any[];
  rechargesSummary?: any[];
  formData?: {};
}

/**
 * INITIAL STATE
 * - Set-up the initial state for this component/feature
 */
export const initialState: CoreDataState = {
  directCostsSummary: [],
  versions: [],
  opexSummary: [],
  rechargesSummary: [],
  formData: {}
};

/**
 * REDUCER
 * - Reducers specific to this component/feature
 */
export function reducer(
  state: CoreDataState = initialState,
  action: CoreDataStateActions
): CoreDataState {
  switch (action.type) {

    case CoreDataStateActionTypes.LOAD_DIRECT_COSTS_SUCCESS:
      return {
        ...state,
        directCostsSummary: action.payload
      };

    case CoreDataStateActionTypes.LOAD_VERSIONS_SUCCESS:
      return {
        ...state,
        versions: action.payload
      };

    case CoreDataStateActionTypes.LOAD_OPEX_SUMMARY_SUCCESS:
      return {
        ...state,
        opexSummary: action.payload
      };

    case CoreDataStateActionTypes.LOAD_RECHARGES_SUMMARY_SUCCESS:
      return {
        ...state,
        rechargesSummary: action.payload
      };

    case CoreDataStateActionTypes.UPDATE_FORM_DATA:
      return {
        ...state,
        formData: updateFormData(state, action.payload)
      };

    default: {
      return state;
    }
  }
}

function updateFormData(state: CoreDataState, data: FormUpdateData ) {
  const formState = state.formData;
  const formId = data.formId;
  const inputId = data.inputId;

  if (!formState[formId]) {
    formState[formId] = {};
  }

  formState[formId][inputId] = data.value;
  return formState;
}
