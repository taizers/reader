import { getToken } from '../../utils';

const instance = (instance: any) => {
  instance.interceptors.request.use(function (config: any) {
    config.headers.Authorization = 'Bearer ' + getToken();
    return Promise.resolve(config);
  });
};

export default instance;
