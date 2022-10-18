import axios from 'axios';

export const checkAuth = () => {
  return axios.get<AuthenticatorResponse>(`${process.env.REACT_APP_API_URL}auth/refresh`, {withCredentials: true});
}
