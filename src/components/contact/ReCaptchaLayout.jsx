// src/components/contact/ReCaptchaLayout.jsx
'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Script from 'next/script'

export default function ReCaptchaLayout({ children }) {
  return (
    <>
      {/* Optionally load the reCAPTCHA v3 script here */}
      <Script
        id="recaptcha-v3"
        strategy="afterInteractive"
        src="https://www.google.com/recaptcha/api.js?render=6LckOa0UAAAAACD_wTWVwlf61u8PNBk-tMMs8DP0"
      />
      <GoogleReCaptchaProvider reCaptchaKey="6LckOa0UAAAAACD_wTWVwlf61u8PNBk-tMMs8DP0">
        {children}
      </GoogleReCaptchaProvider>
    </>
  )
}