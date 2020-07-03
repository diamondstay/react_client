import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the SearchResultPage state domain
 */

const selectSearchResultPageDomain = state =>
  state.searchResultPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectFilter = () =>
  createSelector(
    selectSearchResultPageDomain,
    globalState => globalState.filterResult,
  );

/**
 * Default selector used by SearchResultPage
 */

const makeSelectSearchResultPage = () =>
  createSelector(
    selectSearchResultPageDomain,
    state => state,
  );

export default makeSelectSearchResultPage;
export { selectSearchResultPageDomain, makeSelectFilter };
