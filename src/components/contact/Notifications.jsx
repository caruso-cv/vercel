'use client'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

export default function Notification({
  show,
  onClose,
  type = 'success', // or 'error'
  title = '',
  message = '',
}) {
  // Auto-close after 12s
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 12000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  const isSuccess = type === 'success'
  const Icon = isSuccess ? CheckCircleIcon : ExclamationCircleIcon
  const iconColor = isSuccess ? 'text-green-400' : 'text-red-400'

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end justify-end px-4 py-6 sm:p-6 z-50"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={show}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transform ease-in duration-100 transition"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="translate-x-full opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="shrink-0">
                  <Icon className={`h-6 w-6 ${iconColor}`} aria-hidden="true" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm sm:text-lg font-medium text-gray-900">{title}</p>
                  <p className="mt-1 text-sm sm:text-base text-gray-500">{message}</p>
                </div>
                <div className="ml-4 flex shrink-0">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}