import client from './client';

export const login = ({ username, password }) => {
  return client.post('/api/auth/login', { username, password });
};

export const register = ({ username, password }) => {
  return client.post('/api/auth/register', { username, password });
};

export const check = () => {
  return client.get('/api/auth/check');
};

export const logout = () => {
  return client.post('/api/auth/logout');
};
