'use client'

import ReCaptchaProvider from '@/components/contact/ReCaptchaProvider'
import ContactForm from '@/components/contact/ContactForm'

export default function Contact() {
  return (
    <ReCaptchaProvider>
      <ContactForm />
    </ReCaptchaProvider>
  )
}