/*
'use server';

import { sessionExpiry } from './session-expiry';
import { handleDecodeToken } from '../utils/handle-tokens/handle-tokens.utils';
import { setCookie } from '../utils/manage-cookies/manage-cookies.utils';

export interface ICookieOptions {
  domain: string;
  path: string;
  httpOnly: boolean;
  secure: boolean;
  sameSite: 'none' | 'lax' | 'strict';
}

const commonCookiesOptions: ICookieOptions = {
  domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN!,
  path: '/',
  httpOnly: process.env.NEXT_PUBLIC_COOKIE_DOMAIN !== 'localhost',
  secure: process.env.NEXT_PUBLIC_COOKIE_DOMAIN !== 'localhost',
  sameSite: process.env.NEXT_PUBLIC_COOKIE_DOMAIN !== 'localhost' ? 'none' : 'lax'
};

const refreshToken = async (baseURL: string): Promise<boolean> => {
  try {
    const date = new Date();
    const response = await publicApi.post<TApiResponse<string>>('/auth/refresh');

    if (response.data.status.code === 200) {
      const decrypted_token = handleDecodeToken({ token: response.data.attributes, secret: process.env.NEXT_PUBLIC_BACKEND_TO_FRONTEND_SECRET! });
      if (decrypted_token?.accessToken) {
        setCookie('auth_token', response.data.attributes, commonCookiesOptions);
        setCookie('exp', new Date(date.getTime() + decrypted_token.expireIn * 60 * 1000).toISOString(), commonCookiesOptions);
      }

      return true;
    }

    throw Error('Error refreshing token status code');
  } catch (error) {
    console.error('ERROR REFRESH TOKEN: ', error);
    await sessionExpiry();
    return false;
  }
};

export default refreshToken;
*/
