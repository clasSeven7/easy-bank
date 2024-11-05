// src/services/api.ts
import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import { API_URL } from '../config'; // Ajuste o caminho conforme necessário

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders;
    }
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.replace('/');
    }
    return Promise.reject(error);
  }
);

export default api;
