import { LOCAL_STORAGE_AUTH_KEY } from 'containers/App/constants';
import reactLocalStorage from 'utils/localStorage';

export function addAccessToken(initialConfig) {
  const config = initialConfig;
  const token = reactLocalStorage.getObject(LOCAL_STORAGE_AUTH_KEY);
  const { noAppendToken, ...headersConfigs } = config.headers;
  if (token && token.length) {
    let headers = { ...headersConfigs };
    if (!noAppendToken){
      headers['X-Auth-Token'] = token;
    }
    config.headers = headers;
  } else {
    config.headers = headersConfigs;
  }
  return config;
}

export function onRejected(error) {
  return Promise.reject(error);
}
