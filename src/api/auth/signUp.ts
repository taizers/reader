import http from '../../http';

type ValueType = {
  email: string;
  password: string;
  name: string;
};

type ResponseType = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export const signUp = (data: ValueType) => {
  return http.post<ResponseType>('api/auth/signUp', data);
}
