'use client'
import { useEffect } from 'react'
import ReCaptchaProvider from '@/components/contact/ReCaptchaProvider'
import ContactForm from '@/components/contact/ContactForm'

export default function Contact() {
  useEffect(() => {
    document.body.classList.add('contact-page')
    return () => {
      document.body.classList.remove('contact-page')
    }
  }, [])

  return (
    <ReCaptchaProvider>
      <ContactForm />
    </ReCaptchaProvider>
  )
}