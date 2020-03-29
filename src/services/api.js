import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://go5ousnc8i.execute-api.us-east-1.amazonaws.com/Production',
  // baseURL: 'http://localhost:3001',
  baseURL: 'https://api.viladalila.online',
});

export default api;
