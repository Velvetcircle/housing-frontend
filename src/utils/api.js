// src/utils/api.js
import axios from 'axios';
import { getToken } from './auth';

const API = axios.create({
  baseURL: 'http://localhost:4000/api', // Update as needed
});

// Attach token to headers automatically
API.interceptors.request.use((req) => {
  const token = getToken();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
