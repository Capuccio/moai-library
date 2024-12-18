/*
import { useState, useEffect, useCallback } from "react";
import { sessionExpiry } from "../../server/session-expiry";

export default function modalSessionLogic() {
  const [showModal, setShowModal] = useState(false);
  const [modalTimer, setModalTimer] = useState<number>(60);
  const lastActiveTime = useRef<number>(Date.now());
  const modalDecisionInterval = useRef<NodeJS.Timeout | null>(null);

  const handleCloseSession = useCallback(async () => {
    try {
      await sessionExpiry();
      signOut({ redirect: false });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error closing session ', error);
    }
  }, []);

  const handleResetActivity = (): number => (lastActiveTime.current = Date.now());

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'click'];
    events.forEach(event => window.addEventListener(event, handleResetActivity));

    return () => {
      events.forEach(event => window.removeEventListener(event, handleResetActivity));
    };
  }, []);

  useEffect(() => {
    if (!expireIn) return;
    let refreshInterval: NodeJS.Timeout | undefined = undefined;

    if (!showModal) {
      const TOKEN_REFRESH = expireIn - MINUTES_REFRESH;
      const TOKEN_INTERVAL = TOKEN_REFRESH - new Date().getTime();

      refreshInterval = setInterval(async () => {
        const currentTime = Date.now();
        const timeSinceLastActive = currentTime - lastActiveTime.current;

        if (timeSinceLastActive < TOKEN_INTERVAL) {
          const itRefreshed = await refreshToken();
          if (!itRefreshed) signOut({ redirect: false });
          else updateSession();
        }
      }, TOKEN_INTERVAL);
    }

    return () => refreshInterval && clearInterval(refreshInterval);
  }, [showModal, expireIn]);

  useEffect(() => {
    if (!expireIn) return;
    const MODAL_VALIDATION = expireIn - MINUTES_MODAL;
    const MODAL_TIMEOUT = MODAL_VALIDATION - new Date().getTime();

    const checkExpiration = async () => setShowModal(true);

    const modalTimeout = setTimeout(checkExpiration, MODAL_TIMEOUT);
    return () => clearTimeout(modalTimeout);
  }, [expireIn]);

  useEffect(() => {
    if (showModal) {
      modalDecisionInterval.current = setInterval(() => {
        setModalTimer(prevTimer => {
          if (prevTimer <= 0) {
            handleCloseSession();
            return 0;
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(modalDecisionInterval.current as NodeJS.Timeout);
    }
  }, [showModal]);

  const handleStay = async () => {
    const itRefreshed = await refreshToken();
    if (!itRefreshed) signOut({ redirect: false });
    else updateSession();
    setShowModal(false);
  };

  return {
    handleCloseSession,
    handleStay
  }
}
*/
