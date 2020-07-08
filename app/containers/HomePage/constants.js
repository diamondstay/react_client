/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

export const DEFAULT_ACTION = 'app/HomePage/DEFAULT_ACTION';

export const FETCH_BEST_PLACE = 'app/HomePage/FETCH_BEST_PLACE';
export const FETCH_BEST_PLACE_SUCCESS = 'app/HomePage/FETCH_BEST_PLACE_SUCCESS';
export const FETCH_BEST_PLACE_ERROR = 'app/HomePage/FETCH_BEST_PLACE_ERROR';
