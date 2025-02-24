'use client'
import { useState, useEffect } from 'react'
import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

// Tailwind-based size presets
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

  // Mobile: a slight 20px vertical lift using a simple tween transition.
  const mobileAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { type: 'tween', duration: 0.4, ease: 'easeOut' },
  }

  // Desktop: fade only.
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
        className="fixed inset-0 flex w-full justify-center overflow-y-auto bg-gray-900/60 px-0 sm:px-6 sm:py-8 lg:px-8 lg:py-16 z-[80]"
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
      className={clsx(className, 'text-lg font-semibold text-gray-900 3xl:text-xl')}
    />
  )
}

export function DialogBody({ className, ...props }) {
  return <div {...props} className={clsx(className, 'mt-6')} />
}