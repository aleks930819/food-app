'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

import { CookieConsent } from '@/components/cookies';

interface CookieConsentContextType {
  isConsentGiven: boolean;
  giveConsent: () => void;
  revokeConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function useCookieConsent(): CookieConsentContextType {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}

interface CookieConsentProviderProps {
  children: ReactNode;
}

function CookieConsentProvider({ children }: CookieConsentProviderProps): React.JSX.Element {
  const [isConsentGiven, setConsentGiven] = useState(false);

  const localConsent = Cookies.get('fp-localConsent');

  useEffect(() => {
    if (localConsent) {
      setConsentGiven(true);
    }
  }, [localConsent]);

  const giveConsent = () => {
    setConsentGiven(true);
  };

  const revokeConsent = () => {
    setConsentGiven(false);
  };

  return (
    <CookieConsentContext.Provider value={{ isConsentGiven, giveConsent, revokeConsent }}>
      {children}
      <CookieConsent />
    </CookieConsentContext.Provider>
  );
}

export default CookieConsentProvider;
