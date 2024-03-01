import axios from 'axios';

const {url, prefix} = {
  url: 'https://api.vincenzofdg.com.br',
  prefix: "/pesquisa"
}

const api = axios.create({
  baseURL: url + prefix,
});

export default api;