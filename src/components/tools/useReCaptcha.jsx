'use client'
import { useEffect } from 'react'

export default function useReCaptcha(siteKey) {
  useEffect(() => {
    if (!siteKey) {
      console.error('Missing reCAPTCHA site key')
      return
    }

    const scriptId = 'recaptcha-v3'
    let script = document.getElementById(scriptId)

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      script.async = true
      document.body.appendChild(script)
    }

    const badgeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
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

    badgeObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      badgeObserver.disconnect()

      const script = document.getElementById(scriptId)
      if (script) script.remove()

      const badge = document.querySelector('.grecaptcha-badge')
      if (badge && badge.parentNode) {
        badge.parentNode.removeChild(badge)
      }

      const noscript = document.querySelector('noscript')
      if (noscript && noscript.parentNode) {
        noscript.parentNode.removeChild(noscript)
      }
    }
  }, [siteKey])
}