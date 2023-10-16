'use client';

import Link from 'next/link';
import React from 'react';

import Cookies from 'js-cookie';

import { useCookieConsent } from '@/context/cookies-context';

import { ClientOnly } from '@/components/client-only';
import { Button } from '@/components/ui';

const CookieConsent = () => {
  const { isConsentGiven, giveConsent } = useCookieConsent();

  const acceptCookie = () => {
    Cookies.set('fp-localConsent', 'true', { expires: 365 });
    giveConsent();
  };

  // No need to show the cookie consent if the user has already given consent
  if (isConsentGiven) {
    return null;
  }

  return (
    <ClientOnly>
      <section className="fixed inset-0 bg-gray-900 bg-opacity-70 z-50">
        <article
          className="fixed bottom-0 left-0 right-0 flex flex-col  items-start justify-between px-4 py-8 bg-white
          grow-from-bottom transition-all duration-500 ease-in-out"
        >
          <span aria-labelledby=" " className="text-black text-base mr-16">
            {`Cookies help us deliver our services. By using our services, you agree to our use of cookies. You can find more information about cookies and how to manage them by clicking`}{' '}
            <span>
              <Link href="/cookies" className="text-black font-bold">
                HERE
              </Link>
            </span>
          </span>
          <form onSubmit={acceptCookie}>
            <Button type="submit" aria-label="Съгласен съм!" className="mt-4" variant="primary">
              I agree!
            </Button>
          </form>
        </article>
      </section>
    </ClientOnly>
  );
};

export default CookieConsent;
