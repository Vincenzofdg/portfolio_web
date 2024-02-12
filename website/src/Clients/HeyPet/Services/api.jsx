import axios from 'axios';

export const server = 'http://193.203.183.47:3001';

const api = axios.create({
  baseURL: server,
});

export default api;