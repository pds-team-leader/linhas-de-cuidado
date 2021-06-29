import axios from 'axios';

const api = axios.create({
  baseURL: 'ttps://linhas-de-cuidado.herokuapp.com/',
});

export default api;
