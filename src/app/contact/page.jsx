'use client'

import React, { useState } from 'react'
import Notification from '@/components/contact/Notifications' // the sliding toast
import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  // Field-specific errors, e.g. errors.phone = "must have at least 10 digits"
  const [errors, setErrors] = useState({})

  // Toast-like notification state
  const [notif, setNotif] = useState({
    show: false,
    type: 'success',
    title: '',
    message: '',
  })

  function showNotification(type, title, message) {
    setNotif({ show: true, type, title, message })
  }

  function hideNotification() {
    setNotif((prev) => ({ ...prev, show: false }))
  }

  // ============ VALIDATION ============

  const validateForm = (data) => {
    const newErrors = {}

    // 1) First name required
    if (!data['first-name']) {
      newErrors.firstName = 'Required *'
    }

    // 2) Last name required
    if (!data['last-name']) {
      newErrors.lastName = 'Required *'
    }

    // 3) Email required + basic valid format
    //    Using a stricter regex: something@something.tld (2+ chars in TLD)
    if (!data.email) {
      newErrors.email = 'Required *'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
      newErrors.email = 'Invalid email'
    }

    // 4) Phone required, only digits + dashes, at least 10 digits
    if (!data['phone-number']) {
      newErrors.phone = 'Required *'
    } else {
      // Check allowed characters
      if (!/^[0-9-]+$/.test(data['phone-number'])) {
        newErrors.phone = 'only digits & dashes allowed'
      } else {
        // Strip out dashes, check length
        const phoneDigits = data['phone-number'].replace(/-/g, '')
        if (phoneDigits.length < 10) {
          newErrors.phone = 'must have at least 10 digits'
        }
      }
    }

    // 5) Message required & max 200 characters
    if (!data.message) {
      newErrors.message = 'Required *'
    } else if (data.message.length > 200) {
      newErrors.message = 'Max 200 characters'
    }

    return newErrors
  }

  // ============ FORM SUBMIT ============

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrors({}) // clear old errors

    // Honeypot check (spam prevention)
    const honeypot = event.target.honeypot.value
    if (honeypot) return // skip if spam

    // Convert form to object
    const formData = new FormData(event.target)
    formData.delete('honeypot')
    const data = Object.fromEntries(formData.entries())

    // Validate
    const validationErrors = validateForm(data)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Attempt to POST
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        // Clear the form
        event.target.reset()

        // Show success toast
        showNotification(
          'success',
          'Message Sent!',
          'Thank you, we will get in touch soon.'
        )
      } else {
        // Show error toast
        showNotification(
          'error',
          'Error Sending Message',
          'Please try again later.'
        )
      }
    } catch (err) {
      console.error('Submission error:', err)
      showNotification(
        'error',
        'Oops!',
        'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <div className="relative overflow-x-hidden z-30">
      {/* Sliding Notification in bottom-right */}
      <Notification
        show={notif.show}
        onClose={hideNotification}
        type={notif.type}
        title={notif.title}
        message={notif.message}
      />

      <div className="relative pt-20 md:pt-36 3xl:pt-52">
        <div className="mx-auto grid max-w-8xl grid-cols-1 lg:grid-cols-2">
          {/* Left Side – Contact Info */}
          <div className="relative px-6 pb-2 pt-24 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div
                className="absolute inset-y-0 left-0 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2 border-r border-white/10"
                style={{
                  WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)',
                  maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)',
                }}
              >
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full stroke-[#1B1C1E] [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"
                >
                  <defs>
                    <pattern
                      x="100%"
                      y={-1}
                      id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <h2 className="text-pretty text-5xl font-bold text-white relative z-30 md:text-6xl uppercase">
                Get in touch
              </h2>
              <p className="mt-6 text-xl md:text-2xl text-white">
                Our team is here to help with any questions you might have.
              </p>
              <p className="mt-6 text-base md:text-xl text-white">
                Feel free to reach out, we look forward to connecting with you.
              </p>
              <dl className="mt-10 space-y-4 text-base/7 md:text-lg text-gray-300 relative z-30">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    1145 Innovation Drive, Suite 101
                    <br />
                    Kanata, Ontario, K2K 3G8
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <BuildingOffice2Icon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    5270 Solar Drive, Unit 21
                    <br />
                    Mississauga, Ontario, L4W 0G7
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:info@neutroncontrols.com"
                      className="hover:text-white"
                    >
                      info@neutroncontrols.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Side – Contact Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 lg:text-base 3xl:text-lg font-semibold text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      // If empty, show "Required *" as red placeholder
                      placeholder={errors.firstName || ''}
                      className={`
                        block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white
                        placeholder:text-gray-500 focus:outline-indigo-500
                        ${errors.firstName ? 'placeholder:text-red-400 border border-red-500' : ''}
                      `}
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 lg:text-base 3xl:text-lg font-semibold text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      placeholder={errors.lastName || ''}
                      className={`
                        block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white
                        placeholder:text-gray-500 focus:outline-indigo-500
                        ${errors.lastName ? 'placeholder:text-red-400 border border-red-500' : ''}
                      `}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  {/* If there's an email error beyond just "Required *", show it in red brackets next to label */}
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-white lg:text-base 3xl:text-lg"
                  >
                    Email
                    {errors.email && errors.email !== 'Required *' && (
                      <span className="ml-2 text-red-400">
                        ({errors.email})
                      </span>
                    )}
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={
                        // if it's just empty, show "Required *" placeholder
                        errors.email === 'Required *' ? errors.email : ''
                      }
                      className={`
                        block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white
                        placeholder:text-gray-500 focus:outline-indigo-500
                        ${
                          errors.email
                            ? 'placeholder:text-red-400 border border-red-500'
                            : ''
                        }
                      `}
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-white lg:text-base 3xl:text-lg"
                  >
                    Phone number
                    {errors.phone && errors.phone !== 'Required *' && (
                      <span className="ml-2 text-red-400">
                        ({errors.phone})
                      </span>
                    )}
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      placeholder={
                        errors.phone === 'Required *' ? errors.phone : ''
                      }
                      className={`
                        block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white
                        placeholder:text-gray-500 focus:outline-indigo-500
                        ${
                          errors.phone
                            ? 'placeholder:text-red-400 border border-red-500'
                            : ''
                        }
                      `}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-white lg:text-base 3xl:text-lg"
                  >
                    Message
                    {errors.message && errors.message !== 'Required *' && (
                      <span className="ml-2 text-red-400">
                        ({errors.message})
                      </span>
                    )}
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={200}
                      placeholder={
                        errors.message === 'Required *' ? errors.message : ''
                      }
                      className={`
                        block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white 3xl:text-base
                        placeholder:text-gray-500 focus:outline-indigo-500
                        ${
                          errors.message
                            ? 'placeholder:text-red-400 border border-red-500'
                            : ''
                        }
                      `}
                    />
                  </div>
                </div>

                {/* Honeypot (hidden) */}
                <div style={{ display: 'none' }}>
                  <label htmlFor="honeypot">Leave this field empty</label>
                  <input id="honeypot" name="honeypot" type="text" autoComplete="off" />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="uppercase rounded-md bg-[#425ACA] px-3.5 py-2.5 text-center text-sm font-semibold text-white 3xl:text-base shadow-sm hover:bg-indigo-500 focus:outline-indigo-500"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}