import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { handleDecodeToken } from '../handle-tokens';
import { getCookie } from '../manage-cookies/manage-cookies.utils';

export const apiInstances: Map<string, AxiosInstance> = new Map();

export const createApiInstance = (instanceName = 'core', baseURL: string): AxiosInstance | undefined => {
  if (apiInstances.has(instanceName)) {
    return apiInstances.get(instanceName);
  }

  const instance: AxiosInstance = axios.create({ baseURL });

  instance.interceptors.request.use(
    async (req: InternalAxiosRequestConfig) => {
      const authToken = getCookie('auth_token');

      if (authToken) {
        const decrypted = handleDecodeToken({ token: authToken, secret: process.env.NEXT_PUBLIC_BACKEND_TO_FRONTEND_SECRET! });

        if (decrypted?.accessToken) {
          req.headers.Authorization = `Bearer ${decrypted.accessToken}`;
        }
      }

      return req;
    },
    error => {
      console.error('Error in interceptor:', error);
      return Promise.reject(error);
    }
  );

  apiInstances.set(instanceName, instance);
  return instance;
};

export const initializeApiInstances = (apiConfig: Record<string, string>) => {
  if (!apiConfig || typeof apiConfig !== 'object') {
    console.error('Invalid apiConfig provided to initializeApiInstances');
    return;
  }

  Object.entries(apiConfig).forEach(([instanceName, baseURL]) => {
    if (typeof baseURL !== 'string') {
      console.error(`Invalid baseURL for instance ${instanceName}`);
      return;
    }

    createApiInstance(instanceName, baseURL);
  });
};
