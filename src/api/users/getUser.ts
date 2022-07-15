import http from '../../http';
  
type ResponseType = {
    id: string;
    name: string;
    email: string;
};

export const getUser = (id: string) => {
  return http.get<ResponseType>(`api/users/${id}`);
}