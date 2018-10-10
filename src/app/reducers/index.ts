import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';


// Reducers
import * as SidePanelReducers from '../modules/core/components/side-panel/state/side-panel.reducers';
import * as CoreUiReducers from '../modules/core/state/core-ui/core-ui.reducers';
import * as CoreDataReducers from '../modules/core/state/core-data/core-data.reducers';

export interface State {
  sidePanelState: SidePanelReducers.SidePanelState;
  uiState: CoreUiReducers.CoreUiState;
  dataState: CoreDataReducers.CoreDataState;
  routerState: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  sidePanelState: SidePanelReducers.reducer,
  uiState: CoreUiReducers.reducer,
  dataState: CoreDataReducers.reducer,
  routerState: fromRouter.routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
