import axios from 'axios';
import * as user from './user.api';

import mock from './mocks';

mock.bootstrap();

let protocol = window.location.protocol;
let host = window.location.hostname;
let port = host === 'localhost' || host === '127.0.0.1' ? ':3000' : window.location.port;

let baseURL = `${protocol}//${host}${port}`;
axios.defaults.timeout = 60 * 1000;

// axios.defaults.baseURL = baseURL;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('_token');
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header 都加上token
      config.headers.Authorization = token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          sessionStorage.removeItem('_token');
          break;
        case 403:
          alert(`权限不足，${error.response.data.message}`);
          break;
        case 503:
          break;
        default:
          break;
      }
    }
    return Promise.reject(error)   // 返回接口返回的错误信息
  });

export default {
  baseURL,
  user
}
