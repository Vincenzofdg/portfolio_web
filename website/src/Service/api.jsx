// const BASE_URL = "http://193.203.183.47:";
// const PORT = 3000

// const URL = `${BASE_URL}${PORT}`;

// export default URL;

import axios from 'axios';

const server = {
  androidPhone: 'http://192.168.0.51:3001',
  android: 'http://10.0.2.2:3001',
  ios: 'http://localhost:3001',
  api: 'http://193.203.183.47:3001'
}

const api = axios.create({
  baseURL: server.api,
});

export default api;