/*
import AuthProviderLogic from "./AuthProvider.logic";

export default function AuthProvider({ publicUrl }: { publicUrl: string }) {
	const { data, status, hasSignedIn, updateSession } = AuthProviderLogic(publicUrl);

  if ((status === 'loading' || status === 'unauthenticated') && !hasSignedIn) {
    //return <LoadingPage />;
    return <p>Cargando</p>;
  }

	return (
    <>
      <TokenExpirationCheck expireIn={data?.expireIn} updateSession={updateSession} />
      {children}
    </>
  )
}
*/
