import { AxiosRequestConfig } from 'axios';

declare global {
  interface IAxiosConfig {
    createConfig: AxiosRequestConfig;
    secret: string;
  }
}