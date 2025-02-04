// utils/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,  // Asegúrate de tener la URL de tu API
});

export default api;
