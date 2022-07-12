import http from '../../http';

type ValueType = {
    email: string;
    password: string;
};
  
type ResponseType = {
    id: string;
    name: string;
    email: string;
    token: string;
};

export const login = (data: ValueType) => {
  return http.post<ResponseType>('api/auth/login', data);
}
