'use server';

import { cookies } from 'next/headers';

export async function sessionExpiry(): Promise<void> {
  const cookieStore = cookies();
  cookieStore.set('auth_token', '', {
    expires: new Date(0),
    path: '/',
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN
  });
  cookieStore.set('exp', '', {
    expires: new Date(0),
    path: '/',
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN
  });
}
