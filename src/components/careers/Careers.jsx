'use client'
import { useEffect, useState } from 'react'
import useReCaptcha from '@/components/tools/useReCaptcha'
import ModalTrigger from '@/components/careers/ModalTrigger'
import Notification from '@/components/tools/Notification'
import Faq from '@/components/careers/Faq'
import AnimatedImagesSection from '@/components/careers/AnimatedImagesSection'

export default function CareersPage() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  useReCaptcha(siteKey)

  useEffect(() => {
    document.body.classList.add('careers-page')
    return () => {
      document.body.classList.remove('careers-page')
    }
  }, [])

  const [notif, setNotif] = useState({
    show: false,
    type: 'success',
    title: '',
    message: '',
  })

  function showNotification({ type, title, message }) {
    setNotif({ show: true, type, title, message })
  }

  function hideNotification() {
    setNotif((prev) => ({ ...prev, show: false }))
  }

  return (
    <div>
      <Notification
        show={notif.show}
        onClose={hideNotification}
        type={notif.type}
        title={notif.title}
        message={notif.message}
      />

      <div className="bg-[#090A0B] lg:h-[15vh] h-[5vh]" />
      <div className="bg-[#090A0B]">
        <div>
          <div className="overflow-hidden pt-28 lg:pt-20 relative z-30 mx-auto">
            <div className="mx-auto max-w-8xl px-6 lg:flex 2xl:px-0">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-0 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <section className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 md:max-w-xl">
                  <h1 className="text-5xl font-bold text-white md:text-6xl uppercase">
                    Become a Neutron
                  </h1>
                  <h2 className="mt-6 text-[1.25rem] leading-[1.75rem] md:text-[1.5rem] md:leading-[2rem] text-white">
                    Join Neutron Controls and help shape extraordinary solutions.
                  </h2>
                  <p className="mt-6 text-[1.125rem] leading-[1.75rem] md:text-[1.25rem] md:leading-[1.75rem] text-white">
                    Collaborate in a supportive environment using cutting-edge technologies.
                  </p>
                  <div className="mt-10 flex">
                    <ModalTrigger showNotification={showNotification} />
                  </div>
                </section>
                <AnimatedImagesSection />
              </div>
            </div>
            <Faq />
          </div>
        </div>
      </div>
    </div>
  )
}