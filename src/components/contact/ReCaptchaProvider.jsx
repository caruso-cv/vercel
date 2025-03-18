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
    // Ensure the reCAPTCHA script is loaded.
    const scriptId = 'recaptcha-v3'
    let script = document.getElementById(scriptId)
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      script.async = true
      document.body.appendChild(script)
    }

    // Only run our observer if the page should show the badge.
    if (
      document.body.classList.contains('contact-page') ||
      document.body.classList.contains('careers-page')
    ) {
      // Create an observer to detect when the badge is added.
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === 1 &&
              node.classList.contains('grecaptcha-badge')
            ) {
              // Immediately set its opacity to 0 (hide it)
              node.style.opacity = '0'
              // Force a reflow so the browser registers the change.
              void node.offsetWidth
              // Then set a CSS transition and update opacity to 1.
              node.style.transition = 'opacity 0.3s ease'
              // Using requestAnimationFrame to ensure the change is applied
              requestAnimationFrame(() => {
                node.style.opacity = '1'
              })
            }
          })
        })
      })

      // Observe the document body for added nodes.
      observer.observe(document.body, { childList: true, subtree: true })

      return () => {
        observer.disconnect()
      }
    }
  }, [siteKey])

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  )
}