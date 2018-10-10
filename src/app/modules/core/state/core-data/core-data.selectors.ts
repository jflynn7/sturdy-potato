import { State } from '../../../../reducers';
import { createSelector } from '@ngrx/store';
import { CoreDataState } from './core-data.reducers';

/**
 * SELECTORS
 * - Simple selectors to return commonly used
 * - state items
 */
export const selectCoreDataState = (state: State) => state.dataState;


/**
 * Select a slice of core data state by
 * its data key.
 *
 * e.g Direct Costs Summary = selectDataByKey('directCostsSummary')
 *
 * NB: Selectors can be subscribed to in the same way as global store
 * state, allowing a component to be subscribe only to the state that
 * it needs (also facilitates using OnPush as a change detection strategy
 * to keep components out of the render tree unless their specific slice
 * of state changes === better performance! 👌
 *
 * @param dataKey
 * @returns {MemoizedSelector<State, any>}
 */
export const selectDataByKey = (dataKey) => createSelector(
  selectCoreDataState,
  (state: CoreDataState): any => {
    return state[dataKey];
  });
