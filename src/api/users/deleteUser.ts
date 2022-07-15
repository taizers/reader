import http from '../../http';

export const deleteUser = (id: string) => {
  return http.delete<string>(`api/users/${id}`);
}