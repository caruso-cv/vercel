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
          // Fade in badge
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

    // 🎯 FIX: Make g-recaptcha-response input WAVE-safe
    const fixHiddenCaptchaInput = () => {
      const elements = document.querySelectorAll('[name="g-recaptcha-response"]')
      elements.forEach((el) => {
        el.setAttribute('aria-hidden', 'true')
        el.setAttribute('tabindex', '-1')
        el.setAttribute('role', 'presentation')
        el.setAttribute('hidden', '')
      })
    }

    // Run repeatedly in case the input loads late
    const interval = setInterval(fixHiddenCaptchaInput, 500)
    const timeout = setTimeout(() => clearInterval(interval), 6000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
      clearTimeout(timeout)

      const script = document.getElementById(scriptId)
      if (script) script.remove()

      const badge = document.querySelector('.grecaptcha-badge')
      if (badge?.parentNode) badge.parentNode.removeChild(badge)

      const noscript = document.querySelector('noscript')
      if (noscript?.parentNode) noscript.parentNode.removeChild(noscript)
    }
  }, [siteKey])
}