import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const ApiService = axios.create({
  baseURL: API_URL,
  headers: {
    //Authorization: `Bearer ${localStorage.getItem('token')}`,
    "Content-Type": "application/json",
  }
})
