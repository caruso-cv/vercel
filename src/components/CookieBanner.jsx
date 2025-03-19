'use client'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  // On component mount, check for consent cookie
  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  // Accept cookies: set cookie, update Consent Mode, and hide banner
  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    if (typeof window !== 'undefined') {
      // Ensure dataLayer exists
      window.dataLayer = window.dataLayer || [];
      // Push an event to the dataLayer for GTM
      window.dataLayer.push({ event: 'analytics_consent', consent: 'granted' });
      // Update gtag Consent Mode
      if (window.gtag) {
        window.gtag('consent', 'update', { 
          'analytics_storage': 'granted', 
          'ad_storage': 'granted' 
        });
      }
    }
    setShowBanner(false);
  };

  // Reject cookies: set cookie, update Consent Mode, and hide banner
  const handleReject = () => {
    Cookies.set('cookieConsent', 'rejected', { expires: 365 });
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'analytics_consent', consent: 'denied' });
      if (window.gtag) {
        window.gtag('consent', 'update', { 
          'analytics_storage': 'denied', 
          'ad_storage': 'denied' 
        });
      }
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:px-6 sm:pb-6 z-50">
      <div className="pointer-events-auto ml-auto sm:max-w-xl sm:rounded-xl rounded-t-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
        <p className="text-sm/6 sm:text-base/6 text-gray-900">
          We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. By clicking “Accept all”, you consent to our use of cookies. See our{' '}
          <Link href="/policy" className="font-semibold text-[#435FE1] hover:underline">
            cookie policy
          </Link>
          .
        </p>
        <div className="mt-4 flex items-center gap-x-3">
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={handleReject}
            className="text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 py-2 px-4 rounded-md"
          >
            Reject all
          </button>
        </div>
      </div>
    </div>
  );
}