import http from '../../http';

type ValueType = {
    id: string;
    name?: string;
    password?: string;
};
  
type ResponseType = {
    id: string;
    name: string;
    email: string;
};

export const updateUser = (data: ValueType) => {
  return http.put<ResponseType>('api/users');
}