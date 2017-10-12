import axios from 'axios';
import qs from 'qs';

export function login(form) {
  return axios.post('/login', qs.stringify(form));
}

export function userAdd() {
  return axios.post('/user/add');
}

export function success() {
  return axios.get('/success');
}
