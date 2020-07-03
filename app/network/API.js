import axios from 'axios';
import queryString from 'query-string';
import moment from 'moment';
import * as AccessTokenInterceptor from './interceptors/accessToken';
import * as UnauthorizeInterceptor from './interceptors/unauthorize';
import { AppConfig, Env, Endpoints, Enum } from '../constants';
import endpoints from '../constants/endpoints';

const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaGFuaGFpbmFtMTE3OTdAZ21haWwuY29tIiwiZXhwIjoxNTk0Mjk5MjE0fQ.4uZxtOPmSar7tEb24Qlmkcq_fGqbfHtb4XnsWY8Kl_OBlNZLgpcLxzh-fZ53ULYF5nM_5B9YSydUAbrOf2HqnQ`,
};

const getInstance = () => {
  const instance = axios.create({
    baseURL: AppConfig.API_BASE_URL,
    timeout: 30000,
  });

  instance.interceptors.response.use(
    UnauthorizeInterceptor.onFullfilled,
    UnauthorizeInterceptor.onRejected,
  );
  instance.interceptors.request.use(
    AccessTokenInterceptor.addAccessToken,
    AccessTokenInterceptor.onRejected,
  );
  return instance;
};

const API = {
  instance: getInstance(),
};

/**
 * Auth API
 */

API.register = params => {
  const data = {
    first_name: params.firstName,
    last_name: params.lastName,
    email: params.email,
    password: params.password,
  };
  return API.instance
    .post(Endpoints.REGISTER_URL, data, {
      headers,
    })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

API.login = data =>
  API.instance
    .post(Endpoints.LOGIN_URL, data, {
      headers,
    })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

API.resetPassword = data =>
  API.instance
    .post(Endpoints.RESET_PASSWORD_URL, data)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

// === bo loc
API.filter = param => {
  // console.log('lan 3', param);
  // console.log(headers);
  const queryStringParam = queryString.stringify(param);

  // debugger;
  return API.instance
    .get(`${Endpoints.ENDPOINT_CLIENT}/search?${queryStringParam}`)
    .then(
      response =>
        // console.log(response);
        response.data,
    )
    .catch(error => {
      throw error;
    });
};

// == search loaction

API.searchLoction = query => {
  debugger;
  console.log('lan 3', query);
  // console.log(headers);

  return API.instance
    .post(`${Endpoints.ENDPOINT_CLIENT}/search-box?key=${query}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export default API;
