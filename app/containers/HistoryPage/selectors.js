import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the historyPage state domain
 */

const selectHistoryPageDomain = state => state.historyPage || initialState;

/**
 * Other specific selectors
 */
const makeSelectHistoryList = () =>
  createSelector(
    selectHistoryPageDomain,
    substate => substate.historyList,
  );

/**
 * Default selector used by HistoryPage
 */

const makeSelectHistoryPage = () =>
  createSelector(
    selectHistoryPageDomain,
    substate => substate,
  );

export default makeSelectHistoryPage;
export { selectHistoryPageDomain, makeSelectHistoryList };
