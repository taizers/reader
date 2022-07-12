import axios from 'axios';

import { token } from './interceptors';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  data: {},
  timeout: 180000,
});

token(instance);

export default instance;
