import { create } from 'apisauce';

export enum StatusCodes {
  UNAUTHORIZED = 401
}

const api = create({
  baseURL: process.env.API_BASE_URL || '',
  timeout: 15000
});

export default api;
