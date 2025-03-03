'use client'

import React, { useState, useEffect } from 'react'
import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

const sizes = {
  xs: 'sm:max-w-xs',
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-xl',
  '2xl': 'sm:max-w-2xl',
  '3xl': 'sm:max-w-3xl',
  '4xl': 'sm:max-w-4xl',
  '5xl': 'sm:max-w-5xl',
}

/**
 * Generic Dialog wrapper
 */
export function Dialog({ size = 'lg', className, children, ...props }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Mobile: slight vertical lift
  const mobileAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { type: 'tween', duration: 0.4, ease: 'easeOut' },
  }

  // Desktop: fade only
  const desktopAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { type: 'tween', duration: 0.2, ease: 'easeOut' },
  }

  const animation = isMobile ? mobileAnimation : desktopAnimation

  return (
    <Headless.Dialog {...props}>
      {/* Backdrop */}
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 flex w-full justify-center overflow-y-auto bg-gray-900/60 z-[80]"
      />

      {/* Modal wrapper */}
      <div className="fixed inset-0 w-full overflow-y-auto pt-6 sm:pt-0 z-[100] dialog-container">
        <div className="grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_1fr] sm:p-4">
          <AnimatePresence>
            {props.open && (
              <Headless.DialogPanel
                as={motion.div}
                initial={animation.initial}
                animate={animation.animate}
                exit={animation.exit}
                transition={animation.transition}
                className={clsx(
                  className,
                  sizes[size],
                  'row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-4 ring-1 shadow-lg ring-gray-950/10 sm:mb-auto sm:rounded-2xl',
                  'mx-0 sm:mx-auto'
                )}
              >
                {children}
              </Headless.DialogPanel>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Headless.Dialog>
  )
}

export function DialogTitle({ className, ...props }) {
  return (
    <Headless.DialogTitle
      {...props}
      className={clsx(
        className,
        'text-lg font-semibold text-gray-900 md:text-xl'
      )}
    />
  )
}

export function DialogBody({ className, ...props }) {
  return <div {...props} className={clsx(className, 'mt-6')} />
}

/**
 * Careers-specific dialog
 */
export function CareersDialog({ open, onClose }) {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Careers form submission triggered!')
    setFormStatus('')

    // Honeypot check
    const honeypot = e.target.honeypot.value
    if (honeypot) {
      // If the honeypot has a value, it's likely spam; do nothing
      return
    }

    // Collect form data
    const formData = new FormData(e.target)
    formData.delete('honeypot')

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      })
      if (response.ok) {
        setFormStatus('success')
        e.target.reset()
      } else {
        setFormStatus('error')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setFormStatus('error')
    }
  }

  return (
    <Dialog open={open} onClose={onClose} size="lg">
      <DialogTitle>Job Application</DialogTitle>
      <DialogBody>
        <form
          onSubmit={handleSubmit}
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
        >
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold">
              First Name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              required
              className="w-full border rounded px-2 py-1"
            />
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold">
              Last Name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              required
              className="w-full border rounded px-2 py-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border rounded px-2 py-1"
            />
          </div>

          <div>
            <label htmlFor="phone-number" className="block text-sm font-semibold">
              Phone Number
            </label>
            <input
              id="phone-number"
              name="phone-number"
              type="tel"
              required
              className="w-full border rounded px-2 py-1"
            />
          </div>

          {/* NEW: Position field */}
          <div>
            <label htmlFor="position" className="block text-sm font-semibold">
              Position
            </label>
            <input
              id="position"
              name="position"
              type="text"
              required
              className="w-full border rounded px-2 py-1"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full border rounded px-2 py-1"
            />
          </div>

          <div>
            <label htmlFor="cover-letter" className="block text-sm font-semibold">
              Cover Letter (optional)
            </label>
            <input
              id="cover-letter"
              name="cover-letter"
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-semibold">
              Resume (optional)
            </label>
            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full"
            />
          </div>

          {/* Honeypot field (hidden) */}
          <div style={{ display: 'none' }}>
            <label htmlFor="honeypot" />
            <input
              id="honeypot"
              name="honeypot"
              type="text"
              autoComplete="off"
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Submit Application
            </button>
          </div>

          {/* Submission messages */}
          {formStatus === 'success' && (
            <p className="text-green-500">Thank you for your application!</p>
          )}
          {formStatus === 'error' && (
            <p className="text-red-500">There was an error. Please try again later.</p>
          )}
        </form>
      </DialogBody>
    </Dialog>
  )
}