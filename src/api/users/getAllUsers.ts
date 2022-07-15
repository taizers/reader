import http from '../../http';
  
type ResponseType = Array<object>;

export const getAllUsers = () => {
  return http.get<ResponseType>('api/users');
}
