import axios from 'axios';

const API_URL = 'http://localhost:8085';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
