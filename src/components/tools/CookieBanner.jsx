'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import CookieDialog from '@/components/tools/CookieDialog'

const CONSENT_COOKIE = 'cookieConsent'

// Map the banner's cookie categories to Google Consent Mode signals and push
// the resulting state to GTM. Performance => analytics, Targeting => ads,
// Functional => functionality/personalization. "Necessary" is always allowed.
function applyConsent(choices) {
  if (typeof window === 'undefined') return
  const grant = (on) => (on ? 'granted' : 'denied')

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'analytics_consent',
    consent: choices.performance ? 'granted' : 'denied',
  })

  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: grant(choices.performance),
      ad_storage: grant(choices.targeting),
      ad_user_data: grant(choices.targeting),
      ad_personalization: grant(choices.targeting),
      functionality_storage: grant(choices.functional),
      personalization_storage: grant(choices.functional),
    })
  }
}

// Read the stored consent, tolerating the legacy 'accepted'/'rejected' format.
function readStoredConsent() {
  const raw = Cookies.get(CONSENT_COOKIE)
  if (!raw) return null
  if (raw === 'accepted') {
    return { performance: true, functional: true, targeting: true }
  }
  if (raw === 'rejected') {
    return { performance: false, functional: false, targeting: false }
  }
  try {
    const parsed = JSON.parse(raw)
    return {
      performance: !!parsed.performance,
      functional: !!parsed.functional,
      targeting: !!parsed.targeting,
    }
  } catch {
    return null
  }
}

function storeConsent(choices) {
  Cookies.set(CONSENT_COOKIE, JSON.stringify(choices), { expires: 365 })
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [userId, setUserId] = useState(null)
  const [storedChoices, setStoredChoices] = useState(null)

  useEffect(() => {
    // Generate or retrieve a user ID
    let existingId = localStorage.getItem('userId')
    if (!existingId) {
      existingId = crypto.randomUUID()
      localStorage.setItem('userId', existingId)
    }
    setUserId(existingId)
  }, [])

  // Show the banner if no choice has been made yet; otherwise re-apply the
  // stored choice so Consent Mode reflects it on every page load.
  useEffect(() => {
    const stored = readStoredConsent()
    if (!stored) {
      setShowBanner(true)
      return
    }
    setStoredChoices(stored)
    applyConsent(stored)
  }, [])

  // Listen for the "open-cookie-dialog" event (dispatched in Footer.jsx)
  useEffect(() => {
    const openDialog = () => setShowSettingsModal(true)
    window.addEventListener('open-cookie-dialog', openDialog)
    return () => window.removeEventListener('open-cookie-dialog', openDialog)
  }, [])

  // Persist a choice, update Consent Mode, and close the banner/dialog.
  const commitChoices = (choices) => {
    storeConsent(choices)
    setStoredChoices(choices)
    applyConsent(choices)
    setShowBanner(false)
    setShowSettingsModal(false)
  }

  const handleAcceptAll = () =>
    commitChoices({ performance: true, functional: true, targeting: true })

  const handleRejectAll = () =>
    commitChoices({ performance: false, functional: false, targeting: false })

  // From the settings dialog: respect the individual toggles.
  const handleConfirmChoices = (choices) =>
    commitChoices({
      performance: !!choices.performanceCookies,
      functional: !!choices.functionalCookies,
      targeting: !!choices.targetingCookies,
    })

  return (
    <>
      {showBanner && (
        <div className="pointer-events-auto fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-[#1c1d20] bg-[#0b0c0d] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="text-sm leading-relaxed text-white/70">
              We use cookies to analyze traffic and improve your experience.{' '}
              <span className="hidden sm:inline">
                You can accept all cookies, reject non-essential ones, or choose
                what to allow.{' '}
              </span>
              <a
                href="/policy"
                className="font-semibold text-[#6f86ff] hover:underline"
              >
                Learn more
              </a>
            </p>
            <div className="flex flex-shrink-0 flex-col items-end gap-2 xs:flex-row xs:justify-end">
              <button
                type="button"
                onClick={() => setShowSettingsModal(true)}
                className="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-md bg-[#425ACA] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      <CookieDialog
        open={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        onConfirm={handleConfirmChoices}
        onAcceptAll={handleAcceptAll}
        onRejectAll={handleRejectAll}
        userId={userId}
        initialChoices={storedChoices}
      />
    </>
  )
}
