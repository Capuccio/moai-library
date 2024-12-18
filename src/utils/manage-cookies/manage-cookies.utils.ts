import { cookies } from 'next/headers';

export const setCookie = (name: string, value: string, options: ManageCookies = {}): void => {
  const cookieStore = cookies();
  const defaultOptions: ManageCookies = {
    path: '/'
  };

  const cookieOptions = { ...defaultOptions, ...options };
  cookieStore.set(name, value, cookieOptions);
};

export const getCookie = (name: string): string | undefined => {
  const cookieStore = cookies();
  const authToken: string | undefined = cookieStore.get(name)?.value;
  return authToken;
};

export const removeCookie = (name: string): void => {
  const cookieStore = cookies();
  cookieStore.delete(name);
};
