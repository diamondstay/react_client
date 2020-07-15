import { reactLocalStorage } from 'utils';
import { API_ERROR } from 'containers/App/constants';
import store from 'store';

const UnauthorizeStatusCode = 401;
const ForbiddenStatusCode = 403;
const LoginScene = '/login';

export function onFullfilled(response) {
  return Promise.resolve(response);
}

export function onRejected(error) {
  if (error) {
    const { response } = error;
    if (
      (response && UnauthorizeStatusCode === response.status) ||
      ForbiddenStatusCode === response.status
    ) {
      // reactLocalStorage.clear();
      store.dispatch({
        type: API_ERROR,
        payload: error,
      });
    }
  }
}
