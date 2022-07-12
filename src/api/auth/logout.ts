import http from '../../http';

export const logout = () => {
  return http.post('api/auth/logout');
}
