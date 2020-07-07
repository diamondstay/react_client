import axios from 'axios';
import * as AccessTokenInterceptor from './interceptors/accessToken';
import * as UnauthorizeInterceptor from './interceptors/unauthorize';
import { AppConfig, Env, Endpoints, Enum } from '../constants';
import moment from 'moment';
import queryString from 'query-string';

let config = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaGFuaGFpbmFtMTE3OTdAZ21haWwuY29tIiwiZXhwIjoxNTk0Mjk5MjE0fQ.4uZxtOPmSar7tEb24Qlmkcq_fGqbfHtb4XnsWY8Kl_OBlNZLgpcLxzh-fZ53ULYF5nM_5B9YSydUAbrOf2HqnQ`,
  }
}

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
    .post(Endpoints.REGISTER_URL, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

API.login = params => {
  const data = {
    email: params.email,
    password: params.password,
  };
  return API.instance
    .post(Endpoints.LOGIN_URL, data, config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

API.resetPassword = data => {
  return API.instance
    .post(Endpoints.RESET_PASSWORD_URL, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

API.booking = params => {
  return API.instance
    .post(Endpoints.BOOKING_URL + '?aid=' + params.id + '&checkin=' + params.check_in + '&checkout=' + params.check_out +
    '&adult=' + params.adult + '&child=' + params.child + '&nameCustomer=' + params.customer_name + '&phoneCustomer=' +
      params.customer_phone + '&mailCustomer=' + params.customer_email +
      '&nameOrder=' + ( params.order_name ? params.order_name : params.customer_name ) +
      '&phoneOrder=' + ( params.order_phone ? + params.order_phone : params.customer_phone ) +
      '&mailOrder=' + ( params.order_email ? params.order_email : params.customer_email ) +
      '&notForMe=' + !!params.order_name + '&purpose=' + params.purpose + '&coupon=' + params.coupon,
      {}, config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

API.getHotelDetail = id =>
  API.instance
    .get(`${Endpoints.APARTMENT_URL}/${id}`)
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

API.fetchRoomNextPage = param => {
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
