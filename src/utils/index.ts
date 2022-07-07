const TOKEN_KEY = 'accessToken';

const isToken = () => {
  return !!window.localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string) => {
  window.localStorage.setItem(TOKEN_KEY, token);
};

const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY);
};

const clearToken = () => {
  return window.localStorage.removeItem(TOKEN_KEY);
};

export { isToken, getToken, setToken, clearToken };