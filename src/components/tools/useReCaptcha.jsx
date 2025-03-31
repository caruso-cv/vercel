'use client'
import { useEffect } from 'react'

export default function useReCaptcha(siteKey) {
  useEffect(() => {
    if (!siteKey) {
      console.error('Missing reCAPTCHA site key')
      return
    }

    const scriptId = 'recaptcha-v3'
    if (document.getElementById(scriptId)) {
      console.warn('⚠️ reCAPTCHA script already present, skipping inject.')
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    document.body.appendChild(script)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          // Style reCAPTCHA badge
          if (
            node.nodeType === 1 &&
            node.classList.contains('grecaptcha-badge')
          ) {
            node.style.opacity = '0'
            void node.offsetWidth
            node.style.transition = 'opacity 0.3s ease'
            requestAnimationFrame(() => {
              node.style.opacity = '1'
            })
          }
        })
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    // Fix missing form label warning for hidden g-recaptcha input
    const fixInvisibleCaptchaInputs = () => {
      const inputs = document.querySelectorAll('input[name="g-recaptcha-response"]')
      inputs.forEach((input) => {
        input.setAttribute('aria-hidden', 'true')
        input.setAttribute('tabindex', '-1')
        input.setAttribute('role', 'presentation')
      })
    }

    // Run fix repeatedly for 5 seconds while reCAPTCHA loads
    const interval = setInterval(fixInvisibleCaptchaInputs, 500)
    setTimeout(() => clearInterval(interval), 5000)

    return () => {
      observer.disconnect()

      const script = document.getElementById(scriptId)
      if (script) script.remove()

      const badge = document.querySelector('.grecaptcha-badge')
      if (badge?.parentNode) badge.parentNode.removeChild(badge)

      const noscript = document.querySelector('noscript')
      if (noscript?.parentNode) noscript.parentNode.removeChild(noscript)

      fixInvisibleCaptchaInputs() // Cleanup just in case
    }
  }, [siteKey])
}