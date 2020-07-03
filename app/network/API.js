import axios from 'axios';
import * as AccessTokenInterceptor from './interceptors/accessToken';
import * as UnauthorizeInterceptor from './interceptors/unauthorize';
import { AppConfig, Env, Endpoints, Enum } from '../constants';
import moment from 'moment';

const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaGFuaGFpbmFtMTE3OTdAZ21haWwuY29tIiwiZXhwIjoxNTk0Mjk5MjE0fQ.4uZxtOPmSar7tEb24Qlmkcq_fGqbfHtb4XnsWY8Kl_OBlNZLgpcLxzh-fZ53ULYF5nM_5B9YSydUAbrOf2HqnQ`
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

API.register = (params) => {
  const data = {
    first_name: params.firstName,
    last_name: params.lastName,
    email: params.email,
    password: params.password,
  };
  return API.instance
    .post(Endpoints.REGISTER_URL, data, {
      headers: headers,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

API.login = (params) => {
  const data = {
    email: params.email,
    password: params.password,
  };
  return API.instance
    .post(Endpoints.LOGIN_URL, data, {
      headers: headers,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

API.resetPassword = (data) => {
  return API.instance
    .post(Endpoints.RESET_PASSWORD_URL, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

export default API;
