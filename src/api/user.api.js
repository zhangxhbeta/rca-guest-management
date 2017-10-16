import axios from 'axios';
import qs from 'qs';

export async function login(form) {
  return axios.post('/login', qs.stringify(form));
}

export async function userAdd() {
  return axios.post('/user/add');
}

export async function success() {
  return axios.get('/success');
}

export async function throughProxy() {
  return axios.get('/otherapi/hello/world');
}
