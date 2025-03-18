'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function ReCaptchaProvider({ children }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const pathname = usePathname()
  const shouldLoad = pathname.includes('/contact') || pathname.includes('/careers')
  const scriptId = 'recaptcha-v3'

  useEffect(() => {
    if (shouldLoad) {
      // Append the script if not present
      let script = document.getElementById(scriptId)
      if (!script) {
        script = document.createElement('script')
        script.id = scriptId
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
        script.async = true
        document.body.appendChild(script)
      }
    } else {
      // Remove the script if it exists
      const script = document.getElementById(scriptId)
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [shouldLoad, siteKey])

  // Only wrap children with the GoogleReCaptchaProvider if needed.
  if (shouldLoad) {
    return (
      <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
        {children}
      </GoogleReCaptchaProvider>
    )
  }
  return <>{children}</>
}