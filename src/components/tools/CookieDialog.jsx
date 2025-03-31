'use client'

import React, { useState, useEffect } from 'react'
import * as Headless from '@headlessui/react'
import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation' // <-- For App Router navigation

// -----------------------------------
// 1) Dialog component and related exports
// -----------------------------------

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

export function Dialog({ size = 'lg', className, children, ...props }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const mobileAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { type: 'tween', duration: 0.4, ease: 'easeOut' },
  }

  const desktopAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { type: 'tween', duration: 0.2, ease: 'easeOut' },
  }

  const animation = isMobile ? mobileAnimation : desktopAnimation

  return (
    <Headless.Dialog {...props}>
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 flex w-full justify-center overflow-y-auto bg-gray-900/60 z-[80]"
      />
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
                  sizes[props.size || 'lg'],
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
        'text-[1.125rem] leading-[1.75rem] font-semibold text-gray-900'
      )}
    />
  )
}

export function DialogBody({ className, ...props }) {
  return <div {...props} className={clsx(className, 'mt-6')} />
}

// -----------------------------------
// 2) CookieDialog component
// -----------------------------------

export default function CookieDialog({
  open,
  onClose,
  onConfirm,
  onRejectAll,
  userId,
}) {
  const router = useRouter() // <-- Use Next.js App Router

  // Local states for cookie toggles (defaulted to true)
  const [performanceCookies, setPerformanceCookies] = useState(true)
  const [functionalCookies, setFunctionalCookies] = useState(true)
  const [targetingCookies, setTargetingCookies] = useState(true)

  // Local states for dropdown sections
  const [performanceOpen, setPerformanceOpen] = useState(false)
  const [functionalOpen, setFunctionalOpen] = useState(false)
  const [necessaryOpen, setNecessaryOpen] = useState(false)
  const [targetingOpen, setTargetingOpen] = useState(false)

  // "Confirm My Choices" => pass toggles to parent, then close
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm({ performanceCookies, functionalCookies, targetingCookies })
    }
    onClose()
  }

  // "Reject All" => reset toggles, call parent's reject, then close
  const handleRejectAll = () => {
    setPerformanceCookies(false)
    setFunctionalCookies(false)
    setTargetingCookies(false)
    if (onRejectAll) {
      onRejectAll()
    }
    onClose()
  }

  const switchBaseClasses =
    'group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#425ACA] focus:ring-offset-2'
  const getSwitchClasses = (checked) =>
    clsx(switchBaseClasses, checked ? 'bg-[#425ACA]' : 'bg-gray-200')

  const sectionContainerClasses =
    'border-t py-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer'

  const dropVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  }

  return (
    <Dialog open={open} onClose={() => {}} size="lg">
      <DialogTitle className="pt-4 px-4">Privacy Preferences</DialogTitle>
      <DialogBody>
        <p className="text-gray-700 px-4 mb-2">
          <strong>Your Privacy</strong>
        </p>
        <p className="text-gray-700 text-sm px-4 pb-2">
          When you visit any website, it may store or retrieve information on your browser,
          mostly in the form of cookies. This information does not usually directly identify you,
          but it can give you a more personalized web experience. Because we respect your right to privacy,
          you can choose not to allow some types of cookies.
        </p>
        <Link
          href="/policy"
          className="px-4 font-semibold text-[#435FE1] hover:underline text-sm"
          onClick={(e) => {
            e.preventDefault()
            onClose()
            router.push('/policy') // Programmatic navigation in the same tab
          }}
        >
          Learn more
        </Link>
        <p className="text-gray-700 text-sm px-4 mt-6 mb-6">
          <strong>User ID:</strong> {userId || 'N/A'}
        </p>

        {/* Performance Cookies */}
        <div
          className={sectionContainerClasses}
          onClick={() => setPerformanceOpen(!performanceOpen)}
          role="button"
          aria-expanded={performanceOpen}
          aria-controls="performance-description"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setPerformanceOpen(!performanceOpen)
            }
          }}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center">
              <h3 className="font-semibold text-gray-900">Performance Cookies</h3>
              <svg
                className={clsx(
                  'h-5 w-5 ml-2 transition-transform duration-200',
                  performanceOpen ? 'rotate-180' : 'rotate-0'
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Switch
              checked={performanceCookies}
              onChange={setPerformanceCookies}
              className={getSwitchClasses(performanceCookies)}
              aria-label="Toggle performance cookies"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                aria-hidden="true"
                className={clsx(
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out',
                  performanceCookies ? 'translate-x-5' : 'translate-x-0'
                )}
              />
            </Switch>
          </div>
          <AnimatePresence>
            {performanceOpen && (
              <motion.div
                id="performance-description"
                className="px-4 pb-2"
                variants={dropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm text-gray-600">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Functional Cookies */}
        <div
          className={sectionContainerClasses}
          onClick={() => setFunctionalOpen(!functionalOpen)}
          role="button"
          aria-expanded={functionalOpen}
          aria-controls="functional-description"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setFunctionalOpen(!functionalOpen)
            }
          }}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center">
              <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
              <svg
                className={clsx(
                  'h-5 w-5 ml-2 transition-transform duration-200',
                  functionalOpen ? 'rotate-180' : 'rotate-0'
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Switch
              checked={functionalCookies}
              onChange={setFunctionalCookies}
              className={getSwitchClasses(functionalCookies)}
              aria-label="Toggle functional cookies"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                aria-hidden="true"
                className={clsx(
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out',
                  functionalCookies ? 'translate-x-5' : 'translate-x-0'
                )}
              />
            </Switch>
          </div>
          <AnimatePresence>
            {functionalOpen && (
              <motion.div
                id="functional-description"
                className="px-4 pb-2"
                variants={dropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm text-gray-600">
                  These cookies enable the website to provide enhanced functionality and personalization.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Strictly Necessary Cookies */}
        <div
          className={sectionContainerClasses}
          onClick={() => setNecessaryOpen(!necessaryOpen)}
          role="button"
          aria-expanded={necessaryOpen}
          aria-controls="necessary-description"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setNecessaryOpen(!necessaryOpen)
            }
          }}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center">
              <h3 className="font-semibold text-gray-900">Strictly Necessary Cookies</h3>
              <svg
                className={clsx(
                  'h-5 w-5 ml-2 transition-transform duration-200',
                  necessaryOpen ? 'rotate-180' : 'rotate-0'
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="opacity-50 cursor-not-allowed">
              <Switch
                checked={true}
                onChange={() => {}}
                className="group relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed rounded-full border-2 border-transparent bg-[#425ACA]"
                aria-label="Strictly necessary cookies (always enabled)"
                onClick={(e) => e.stopPropagation()}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none inline-block h-5 w-5 transform translate-x-5 rounded-full bg-white shadow"
                />
              </Switch>
            </div>
          </div>
          <AnimatePresence>
            {necessaryOpen && (
              <motion.div
                id="necessary-description"
                className="px-4 pb-2"
                variants={dropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm text-gray-600">
                  These cookies are essential for the website to function. They are always active.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Targeting Cookies */}
        <div
          className={sectionContainerClasses}
          onClick={() => setTargetingOpen(!targetingOpen)}
          role="button"
          aria-expanded={targetingOpen}
          aria-controls="targeting-description"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setTargetingOpen(!targetingOpen)
            }
          }}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center">
              <h3 className="font-semibold text-gray-900">Targeting Cookies</h3>
              <svg
                className={clsx(
                  'h-5 w-5 ml-2 transition-transform duration-200',
                  targetingOpen ? 'rotate-180' : 'rotate-0'
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Switch
              checked={targetingCookies}
              onChange={setTargetingCookies}
              className={getSwitchClasses(targetingCookies)}
              aria-label="Toggle targeting cookies"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                aria-hidden="true"
                className={clsx(
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out',
                  targetingCookies ? 'translate-x-5' : 'translate-x-0'
                )}
              />
            </Switch>
          </div>
          <AnimatePresence>
            {targetingOpen && (
              <motion.div
                id="targeting-description"
                className="px-4 pb-2"
                variants={dropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm text-gray-600">
                  These cookies may be set through our site by advertising partners to build a profile of your interests.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-end gap-4">
          <button
            type="button"
            onClick={handleRejectAll}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Reject All
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="rounded-md bg-[#425ACA] px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors duration-200"
          >
            Confirm My Choices
          </button>
        </div>
      </DialogBody>
    </Dialog>
  )
}