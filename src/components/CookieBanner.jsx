'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import CookieDialog from '@/components/CookieDialog'
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

  // Show banner if no cookieConsent is set
  useEffect(() => {
    const consent = Cookies.get('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  // Accept cookies
  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 })
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'analytics_consent', consent: 'granted' })
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted',
        })
      }
    }
    setShowBanner(false)
  }

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
        })
      }
    }
    setShowBanner(false)
  }

  // Open cookie settings dialog
  const openSettings = () => {
    setShowBanner(false)
    setShowSettingsModal(true)
  }

  // Called when user clicks "Confirm My Choices" in CookieDialog
  const handleConfirmChoices = (choices) => {
    console.log('User choices:', choices)
    // Optionally update analytics or other scripts based on these choices
    setShowSettingsModal(false)
  }

  // Called when user clicks "Reject All" in CookieDialog
  const handleRejectAllFromModal = () => {
    handleReject() // reuse your global reject logic
    setShowSettingsModal(false)
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (

          <div className="pointer-events-auto mb-8 ml-6 fixed bottom-0 z-50 ">
            <button
              type="button"
              onClick={openSettings}
              className="relative group w-14 h-14 flex items-center justify-center rounded-full bg-white "
              style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)' }}
            >
            <Image 
                src="/logo/Cookies_logo.png"
                alt="Cookies logo"
                width={60}   
                height={60}  
                className="opacity-70 hover:opacity-100"/>
              <span
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
                  opacity-0 
                  transform translate-x-3
                  group-hover:opacity-100 
                  group-hover:translate-x-0 
                  transition-all duration-300 ease-out
                  whitespace-nowrap
                "
              >
                Cookies Settings
                {/* Arrow element */}
                <span className="absolute left-[-4px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black rotate-45"></span>
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