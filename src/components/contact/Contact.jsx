'use client'
import { useEffect } from 'react'
import useReCaptcha from '@/components/tools/useReCaptcha'
import ContactForm from '@/components/contact/ContactForm'

export default function Contact() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  useReCaptcha(siteKey)

  useEffect(() => {
    document.body.classList.add('contact-page')
    return () => {
      document.body.classList.remove('contact-page')
    }
  }, [])

  return <ContactForm />
}