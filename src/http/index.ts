import axios from 'axios';

import { token } from './interceptors';

const instance = axios.create({
  baseURL: process.env['REACT_APP_BASE_URL'],
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  data: {},
  timeout: 180000,
});

token(instance);

export default instance;
