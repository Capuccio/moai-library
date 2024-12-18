/*
import { useCallback, useRef } from 'react';
import { signIn, SignInResponse, useSession } from 'next-auth/react';

export default function AuthProviderLogic(publicUrl: string) {
  const { data, status, update } = useSession();
  const hasSignedIn = useRef(false);

  const updateSession = useCallback(async () => {
    try {
      await update();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Cant update session ', error);
    }
  }, [update]);

  if ((status === 'unauthenticated' || !data?.user) && !hasSignedIn.current) {
    signIn('credentials', { redirect: false }).then((result: SignInResponse | undefined) => {
      if (result?.ok) {
        hasSignedIn.current = true;
      } else {
        window.location.replace(publicUrl);
      }
    });
  }

  if (status === 'unauthenticated' && hasSignedIn.current) window.location.replace(`${publicUrl}/?logout=true`);

  return {
    data,
    status,
    hasSignedIn: hasSignedIn.current,
    updateSession
  };
}
*/
