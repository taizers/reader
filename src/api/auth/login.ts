import http from '../../http';

type ValueType = {
  email: string;
  password: string;
};

type ResponseType = {
  access_token: string;
};

export const login = (data: ValueType) => {
  return http.post<ResponseType>('/api/auth/login', data);
}
