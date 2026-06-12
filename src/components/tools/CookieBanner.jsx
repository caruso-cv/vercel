'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import CookieDialog from '@/components/tools/CookieDialog'
import Image from 'next/image'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    // Generate or retrieve a user ID
    let existingId = localStorage.getItem('userId')
    if (!existingId) {
      existingId = crypto.randomUUID()
      localStorage.setItem('userId', existingId)
    }
    setUserId(existingId)
  }, [])

  // Show banner if no cookieConsent is set; otherwise re-apply the stored
  // choice so Consent Mode reflects it on every page load (not just the first).
  useEffect(() => {
    const consent = Cookies.get('cookieConsent')
    if (!consent) {
      setShowBanner(true)
      return
    }
    if (typeof window !== 'undefined' && window.gtag) {
      const granted = consent === 'accepted'
      window.gtag('consent', 'update', {
        'analytics_storage': granted ? 'granted' : 'denied',
        'ad_storage': granted ? 'granted' : 'denied',
        'ad_user_data': granted ? 'granted' : 'denied',
        'ad_personalization': granted ? 'granted' : 'denied',
      })
    }
  }, [])

  // Listen for the "open-cookie-dialog" event (dispatched in Footer.jsx)
  useEffect(() => {
    const openDialog = () => {
      setShowSettingsModal(true)
    }
    window.addEventListener('open-cookie-dialog', openDialog)
    return () => window.removeEventListener('open-cookie-dialog', openDialog)
  }, [])

  // Reject cookies
  const handleReject = () => {
    Cookies.set('cookieConsent', 'rejected', { expires: 365 })
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'analytics_consent', consent: 'denied' })
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
        })
      }
    }
    setShowBanner(false)
  }

  // Called when user clicks "Confirm My Choices" in CookieDialog
  const handleConfirmChoices = (choices) => {
    console.log('User choices:', choices)
    // Set cookie consent to accepted
    Cookies.set('cookieConsent', 'accepted', { expires: 365 })
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'analytics_consent', consent: 'granted' })
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
        })
      }
    }
    setShowSettingsModal(false)
    setShowBanner(false)
  }

  // Called when user clicks "Reject All" in CookieDialog
  const handleRejectAllFromModal = () => {
    handleReject()
    setShowSettingsModal(false)
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="pointer-events-auto mb-8 ml-6 fixed bottom-0 z-50">
          <button
            type="button"
            onClick={() => setShowSettingsModal(true)}
            className="relative group w-14 h-14 flex items-center justify-center rounded-full bg-white"
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)' }}
          >
            <Image
              src="/logo/Cookies_logo.png"
              alt="Cookies logo"
              width={60}
              height={60}
              className="opacity-70 hover:opacity-100"
            />
            <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[70px]
                  bottom-[8px]
                  mb-2
                  px-2
                  py-1
                  bg-black
                  text-white
                  text-xs
                  rounded
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ease-out
                  invisible
                  opacity-0
                  translate-x-3

                  /* On hover, make it visible, fade in, slide in */
                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-x-0
                "
              >
                Cookies Settings
                <span
                  className="
                    absolute
                    left-[-4px]
                    top-1/2
                    transform
                    -translate-y-1/2
                    w-2
                    h-2
                    bg-black
                    rotate-45
                  "
                />
          </span>
          </button>
        </div>
      )}

      {/* Cookie Settings Dialog */}
      <CookieDialog
        open={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        onConfirm={handleConfirmChoices}
        onRejectAll={handleRejectAllFromModal}
        userId={userId}
      />
    </>
  )
}