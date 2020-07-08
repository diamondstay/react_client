/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

// const makeSelectUsername = () =>
//   createSelector(
//     selectHome,
//     homeState => homeState.username,
//   );

const makeSelectFetchBestPlace = () =>
  createSelector(
    selectHome,
    globalState => globalState,
  );

export { selectHome, makeSelectFetchBestPlace };
