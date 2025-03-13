'use client'
import { useState } from 'react'
import ModalTrigger from '@/components/careers/ModalTrigger'
import Notification from '@/components/careers/Notification'
import Faq from '@/components/careers/Faq'
import AnimatedImagesSection from '@/components/services/AnimatedImagesSection'

export default function CareersPage() {
  // For the Notification
  const [notif, setNotif] = useState({
    show: false,
    type: 'success',
    title: '',
    message: '',
  })

  // Helper function to show the notification
  function showNotification({ type, title, message }) {
    setNotif({
      show: true,
      type,
      title,
      message,
    })
  }

  // We'll hide it by resetting show = false
  function hideNotification() {
    setNotif((prev) => ({ ...prev, show: false }))
  }

  return (
    <div>
      {/* The Notification ALWAYS mounts at top-level */}
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
          <div className="overflow-hidden pt-32 relative z-30 mx-auto">
            <div className="mx-auto max-w-8xl px-6 lg:flex 2xl:px-0">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 md:max-w-xl">
                  <h2 className="text-5xl font-bold text-white md:text-6xl uppercase">
                    Become a Neutron
                  </h2>
                  <p className="mt-6 text-xl md:text-2xl 2xl:text-3xl text-white">
                    Join Neutron Controls and help shape extraordinary solutions.
                  </p>
                  <p className="mt-6 text-lg md:text-xl 2xl:text text-white">
                    Collaborate in a supportive environment using cutting-edge technologies.
                  </p>
                  <div className="mt-10 flex">
                    {/* Passing "showNotification" down to the ModalTrigger so it can call it */}
                    <ModalTrigger showNotification={showNotification} />
                  </div>
                </div>

                {/* Insert the client component for images */}
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