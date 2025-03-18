'use client'

import React, { useEffect } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function ReCaptchaProvider({ children }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  if (!siteKey) {
    console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined')
    return null
  }

  useEffect(() => {
    const scriptId = 'recaptcha-v3'
    // Check if the script is already present
    let script = document.getElementById(scriptId)
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      script.async = true
      document.body.appendChild(script)
    }
    // Cleanup: remove the script when this provider unmounts
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [siteKey])

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  )
}