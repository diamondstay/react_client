import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the Search state domain
 */

const selectSearchLocationDomain = state =>
  state.searchLocation || initialState;

/**
 * Other specific selectors
 */

const makeSelectLocation = () => {
  return createSelector(
    selectSearchLocationDomain,
    globalState => globalState.searchLocation,
  );
};

/**
 * Default selector used by SearchLocation
 */

const makeSelectSearchLocation = () =>
  createSelector(
    selectSearchLocationDomain,
    state => state,
  );

export default makeSelectSearchLocation;
export { selectSearchLocationDomain, makeSelectLocation };
