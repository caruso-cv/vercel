'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Script from 'next/script'

export default function ReCaptchaLayout({ children }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <>
      <Script
        id="recaptcha-v3"
        strategy="afterInteractive"
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
      />
      <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
        {children}
      </GoogleReCaptchaProvider>
    </>
  )
}